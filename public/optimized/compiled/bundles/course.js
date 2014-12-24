define("translations/courses",["i18nObj","jquery"],function(e,i){i.extend(!0,e,{translations:{ar:{courses:{confirm_reject_invitation:"هل ترغب بالتأكيد في رفض الدعوة للمشاركة في هذا المساق؟"}},de:{courses:{confirm_reject_invitation:"Möchten Sie die Einladung zur Teilnahme an diesem Kurs wirklich ablehnen?"}},"en-AU":{courses:{confirm_reject_invitation:"Are you sure you want to reject the invitation to participate in this course?"}},"en-GB":{courses:{confirm_reject_invitation:"Are you sure you want to reject the invitation to participate in this course?"}},es:{courses:{confirm_reject_invitation:"Está seguro que quiere rechazar la invitación a participar en este curso?"}},"fa-IR":{courses:{confirm_reject_invitation:"مطمئنید که می خواهید دعوت نامه شرکت در این درس را رد کنید؟"}},fr:{courses:{confirm_reject_invitation:"Voulez-vous vraiment rejeter l’invitation à participer au cours ?"}},ja:{courses:{confirm_reject_invitation:"このコースへの参加についての招待を拒否してもよろしいですか?"}},nb:{courses:{confirm_reject_invitation:"Er du sikker på at du ønsker å avslå invitasjonen om å delta i dette kurset?"}},nl:{courses:{confirm_reject_invitation:"Weet je zeker dat je de uitnodiging om aan deze cursus deel te nemen wilt negeren?"}},pl:{courses:{confirm_reject_invitation:"Czy na pewno chcesz odrzucić zaproszenie do udziału w tym kursie?"}},pt:{courses:{confirm_reject_invitation:"Tem a certeza de que pretende rejeitar o convite para participar nesta disciplina?"}},"pt-BR":{courses:{confirm_reject_invitation:"Tem certeza que deseja rejeitar o convite para participar deste curso?"}},ru:{courses:{confirm_reject_invitation:"Отклонить приглашение на участие в курсе?"}},tr:{courses:{confirm_reject_invitation:"Bu derse katılım davetini geri çevirmek istediğinize emin misiniz?"}},zh:{courses:{confirm_reject_invitation:"是否确定要拒绝参加此课程的邀请?"}},zh_Hant:{courses:{confirm_reject_invitation:"是否確定要拒絕關於參加這門課程的邀請？"}}}})}),define("course",["i18n!courses","jquery"],function(e,i){i(document).ready(function(){i(".reject_button").click(function(i){var t=confirm(e.t("confirm_reject_invitation","Are you sure you want to reject the invitation to participate in this course?"));t||(i.preventDefault(),i.stopPropagation())})})}),function(){require(["course"])}.call(this),define("compiled/bundles/course",function(){});