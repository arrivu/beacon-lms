(function(){define(["ember"],function(e){return e.ObjectController.extend({inspectorData:e.computed.alias("answers"),chartData:function(){return this.get("answers").map(function(e){return{id:e.id,y:e.responses,correct:e.correct}})}.property("answers")})})}).call(this);