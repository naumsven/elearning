(function($)
{
    $(document).ready(function() {
        var a = ['Universität', 'Lageplan', 'A-Gebäude', 'Seminar', 'Studenten', 'Erstsemesterstudenten',
            'Unigelände', 'Unigebäude', 'Seminarraum', 'Uni', 'Campus', 'Erstis', 'Kommilitone', 'Dozenten', 'Veranstaltung', 'Unizeit', 'Unitag'];

        var slots = $('.slot');
        slots.on("blur", function() {
            validate(this);
        });

        $('#weiter').on("click", function() {
            if (!checkSituation()) {
                alert("Bitte fülle alle Lücken aus!");
            } else {
                document.location.href = "/ersti_e  nd";
            }
        });

        function validate(self) {
            var t = $(self).val();
            if (t.length == 0) return;
            for (var i = 0; i < a.length; i++) {

                if (a[i] === t) { // If word in array matches the word in the input field
                    $(self).addClass("passive");
                    $(self).animate({borderBottomColor: "#7cfc00", borderTopColor: "#7cfc00", backgroundColor:"#fff"}, "slow");
                    $(self).prop('disabled', true);
                    a.splice(i,1); // Delete the found word from the list of correct words

                    return;
                }
            }
            // if we reach this point, the word didn't match any word
            $(self).effect("pulsate", "fast");

            $(self).animate({borderBottomColor: "#ff0000", borderTopColor: "#ff0000", backgroundColor: "#ff8484"},2000,"swing",function() {
                $(this).css({"border-top": "1px solid #c0c0c0",
                    "border-bottom": "1px solid #c0c0c0", "background-color": "#fff"});
            });

        }

        function checkSituation () {
            var s = $('.slot');
            for (var i = 0; i < s.length; i++) {

                if (!$(s[i]).is(":disabled")) return false;
            }
            return true;
        }
    });
})(jQuery);