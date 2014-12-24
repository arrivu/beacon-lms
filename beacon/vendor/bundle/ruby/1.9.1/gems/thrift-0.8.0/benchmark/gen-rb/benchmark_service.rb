#
# Autogenerated by Thrift Compiler (0.8.0)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#

require 'thrift'
require 'benchmark_types'

    module ThriftBenchmark
      module BenchmarkService
        class Client
          include ::Thrift::Client

          def fibonacci(n)
            send_fibonacci(n)
            return recv_fibonacci()
          end

          def send_fibonacci(n)
            send_message('fibonacci', Fibonacci_args, :n => n)
          end

          def recv_fibonacci()
            result = receive_message(Fibonacci_result)
            return result.success unless result.success.nil?
            raise ::Thrift::ApplicationException.new(::Thrift::ApplicationException::MISSING_RESULT, 'fibonacci failed: unknown result')
          end

        end

        class Processor
          include ::Thrift::Processor

          def process_fibonacci(seqid, iprot, oprot)
            args = read_args(iprot, Fibonacci_args)
            result = Fibonacci_result.new()
            result.success = @handler.fibonacci(args.n)
            write_result(result, oprot, 'fibonacci', seqid)
          end

        end

        # HELPER FUNCTIONS AND STRUCTURES

        class Fibonacci_args
          include ::Thrift::Struct, ::Thrift::Struct_Union
          N = 1

          FIELDS = {
            N => {:type => ::Thrift::Types::BYTE, :name => 'n'}
          }

          def struct_fields; FIELDS; end

          def validate
          end

          ::Thrift::Struct.generate_accessors self
        end

        class Fibonacci_result
          include ::Thrift::Struct, ::Thrift::Struct_Union
          SUCCESS = 0

          FIELDS = {
            SUCCESS => {:type => ::Thrift::Types::I32, :name => 'success'}
          }

          def struct_fields; FIELDS; end

          def validate
          end

          ::Thrift::Struct.generate_accessors self
        end

      end

    end
