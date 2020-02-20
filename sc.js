var message = document.querySelector('#message');
var total = 0;
var selectedcheckbox = "";
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.onresult = function(event) {


    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    message.textContent = command;

    if (command.toLowerCase() === 'packages') {
        readOutLoud("in packages we have university package, school package, primary package, specific package and master's package.");
        readOutLoud("press any key on keyboard and say package name?")
        var x = document.getElementById("packages");
        if (x.style.display === "none") {
            x.style.display = "block";
        }

    } else if (command.toLowerCase() === 'tell me your name' || command.toLowerCase() === 'what is your name' || command.toLowerCase() === 'your name') {
        readOutLoud("I am elvis, your personal tutor, just press any key on keyboard and say anything,");




    } else if (command.toLowerCase() === 'tell me a joke' || command.toLowerCase() === 'joke') {
        readOutLoud("ok, here's a joke");
        readOutLoud("what's a computer's least  favourite food, ");
        readOutLoud(" ");
        readOutLoud("it's spam");
        readOutLoud("hahahah");




    } else if (command.toLowerCase() === 'one more' || command.toLowerCase() === "once's more") {
        readOutLoud("ok, here's a another one");
        readOutLoud("how did the frog burn its tongue, ");
        readOutLoud(" ");
        readOutLoud("it tried to eat a firefly");





    } else if (command.toLowerCase() === 'tell me the spelling of czechoslovakia' || command.toLowerCase() === 'czechoslovakia') {
        readOutLoud("C,z,e,c,h,o,s,l,o,v,a,k,i,a, czechoslovakia ");




    } else if (command.toLowerCase() === 'university package' || command.toLowerCase() === 'university') {
        readOutLoud(" this package is for University students, and in this package they can opt for their lectures and practicals and can even get help for their assignments.");
        readOutLoud("if you want buy this package then press any key on keyboard and say select university package")



    } else if (command.toLowerCase() === 'select university package') {
        //selecting university package

        document.querySelector('#universitypack').checked = true;
        total = total + 1000;
        readOutLoud("university package selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'school package' || command.toLowerCase() === 'school') {
        readOutLoud(" in this package High School and Intermediate Students can take guidance from Elvis for their studies. they can get solutions for their questions and a planned weekly test to keep a track of their performances.");
        readOutLoud("if you want buy this package then press any key on keyboard and say select school package")



    } else if (command.toLowerCase() === 'select school package' || command.toLowerCase() === 'select school') {
        //selecting school package

        document.querySelector('#schoolpack').checked = true;
        total = total + 100;
        readOutLoud("School package selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'primary package' || command.toLowerCase() === 'primary') {
        readOutLoud("  Students from class 1st to 5th can take help from their private tutor for any subject related query. they can ask any question from any subjects and also find several tasks and quizes whixh will help them in their learning.");
        readOutLoud("if you want buy this package then press any key on keyboard and say select primary package")



    } else if (command.toLowerCase() === 'select primary package' || command.toLowerCase() === 'select primary') {
        //selecting primary package

        document.querySelector('#primarypack').checked = true;
        total = total + 50;
        readOutLoud("primary package selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'specific package' || command.toLowerCase() === 'specific' || command.toLowerCase() === 'give me details of specific package') {
        readOutLoud("Students Willing to Opt for Specfic courses apart from regular courses can go through this package. courses for job purpose or for students who wish to study both maths & bio after their high school can opt. one of their courses here.");
        readOutLoud("if you want buy this package then press any key on keyboard and say select specific package")



    } else if (command.toLowerCase() === 'select specific package' || command.toLowerCase() === 'select specific') {
        //selecting primary package

        document.querySelector('#specipack').checked = true;
        total = total + 500;
        readOutLoud("Specific package selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'masters package' || command.toLowerCase() === 'masters' || command.toLowerCase() === 'master' || command.toLowerCase() === 'give me details of masters package') {
        readOutLoud(" Students doing Masters degree can use this Personalized package to work on their weak points.");
        readOutLoud("if you want buy this package then press any key on keyboard and say select master's package")



    } else if (command.toLowerCase() === 'select masters package' || command.toLowerCase() === 'select masters' || command.toLowerCase() === 'select master' || command.toLowerCase() === 'select master package') {
        //selecting primary package

        document.querySelector('#masterpack').checked = true;
        total = total + 2000;
        readOutLoud("master's package selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    }
    //if the user say audio library then we just show audiolib division with javascript
    else if (command.toLowerCase() === 'audio library' || command.toLowerCase() === 'audio' || command.toLowerCase() === 'library') {
        readOutLoud("in audio library we have Modules, Lectures, Audio Books, Personalized Speakers and Motivational Stories");
        readOutLoud("press any key on keyboard and say audio library  name?")
        var x = document.getElementById("audiolibrary");
        if (x.style.display === "none") {
            x.style.display = "block";
        }

    } else if (command.toLowerCase() === 'modules' || command.toLowerCase() === 'module' || command.toLowerCase() === 'models') {
        readOutLoud(" modules help you enchance our memorizing skills. as while watching a video or a series of events use can easily feed it inour brains rather from books hence module are a great helping hand for memorising theories.");
        readOutLoud("if you want buy this audio library then press any key on keyboard and say select modules")



    } else if (command.toLowerCase() === 'select modules' || command.toLowerCase() === 'select module') {
        //selecting modules

        document.querySelector('#modules').checked = true;
        total = total + 20;
        readOutLoud("modules selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'lectures' || command.toLowerCase() === 'lecture') {
        readOutLoud("  Lectures on various topics will be given orally for blind people in lucid language. so that whatever is said or taught or explained is easily understood by the students, that's our main motive.");
        readOutLoud("if you want buy this audio library then press any key on keyboard and say select lectures")



    } else if (command.toLowerCase() === 'select lectures' || command.toLowerCase() === 'select lecture') {
        //selecting lectures

        document.querySelector('#lectures').checked = true;
        total = total + 30;
        readOutLoud("lectures selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'audio books' || command.toLowerCase() === 'audio books' || command.toLowerCase() === 'books') {
        readOutLoud(" Audio books are for those who find reading boring. and these audio books themselves will read their stories and all you got to do is just sit and listen.");
        readOutLoud("if you want buy this audio library then press any key on keyboard and say select Audio Books")



    } else if (command.toLowerCase() === 'select audio books' || command.toLowerCase() === 'select books') {
        //selecting audio books

        document.querySelector('#audiobooks').checked = true;
        total = total + 8;
        readOutLoud("Audio Books selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'personalized speakers' || command.toLowerCase() === 'personalized speaker' || command.toLowerCase() === 'personalized' || command.toLowerCase() === 'speakers') {
        readOutLoud("  Personalized speakers will also be provided for regulating the volume accordingly, students can set the volume according to thier comfort level and modify it as they need it.");
        readOutLoud("if you want buy this audio library then press any key on keyboard and say select Personalized Speakers")



    } else if (command.toLowerCase() === 'select personalized speakers' || command.toLowerCase() === 'select speakers' || command.toLowerCase() === 'select speaker' || command.toLowerCase() === 'select personalized') {
        //selecting Personalized Speakers

        document.querySelector('#personalizedsp').checked = true;
        total = total + 35;
        readOutLoud("Personalized Speakers selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'motivational stories' || command.toLowerCase() === 'stories' || command.toLowerCase() === 'story' || command.toLowerCase() === 'motivational' || command.toLowerCase() === 'motivational story') {
        readOutLoud("  Stories of many people who have inspired many lives and those who motivate others are available too, listening to the stories of such great people can motivate them to learn more and more and achieve thier goals in life.");
        readOutLoud("if you want buy this audio library then press any key on keyboard and say select motivational stories")



    } else if (command.toLowerCase() === 'select motivational stories' || command.toLowerCase() === 'select stories' || command.toLowerCase() === 'select story' || command.toLowerCase() === 'select motivational' || command.toLowerCase() === 'select motivational story') {
        //selecting Personalized Speakers

        document.querySelector('#motivationalst').checked = true;
        total = total + 5;
        readOutLoud("motivational stories selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    }

    //if the user say gadgets then we just show gadgets division with javascript
    else
    if (command.toLowerCase() === 'gadgets' || command.toLowerCase() === 'gadget') {
        readOutLoud("in gadgets we have Braillie keyboard, specialized microphone, haptic feedback sensor, headphone and Elvis Radio ");
        readOutLoud("press any key on keyboard and say gadget name?")
        var x = document.getElementById("gadgets");
        if (x.style.display === "none") {
            x.style.display = "block";
        }

    } else if (command.toLowerCase() === 'braille keyboard' || command.toLowerCase() === 'keyboard' || command.toLowerCase() === 'braille' || command.toLowerCase() === 'braille keyboard') {
        readOutLoud(" The Braille Keyboard for the Blind and Visually Impaired is a braille keyboard designed for use by individuals who are blind or have low vision.");
        readOutLoud("if you want buy this gadget then press any key on keyboard and say select braille keyboard")



    } else if (command.toLowerCase() === 'select braille keyboard' || command.toLowerCase() === 'select keyboard' || command.toLowerCase() === 'select braille' || command.toLowerCase() === 'select braille keyboard') {
        //selecting braille

        document.querySelector('#braillekey').checked = true;
        total = total + 50;
        readOutLoud("braille keyboard selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'specialized microphone' || command.toLowerCase() === 'microphone' || command.toLowerCase() === 'specialized' || command.toLowerCase() === 'specialised microphone') {
        readOutLoud(" Mimicking the way our ears hear naturally, 3D or spatial audio allows Blind people to hear sounds all around them in more accurate detail than stereo.");
        readOutLoud("if you want buy this gadget then press any key on keyboard and say select specialized microphone")



    } else if (command.toLowerCase() === 'select specialized microphone' || command.toLowerCase() === 'select microphone' || command.toLowerCase() === 'select specialized' || command.toLowerCase() === 'select specialised microphone') {
        //selecting specialized microphone

        document.querySelector('#specialmicro').checked = true;
        total = total + 120;
        readOutLoud("specialized microphone selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'haptic feedback sensor' || command.toLowerCase() === 'haptic feedback' || command.toLowerCase() === 'feedback sensor' || command.toLowerCase() === 'haptic sensor' || command.toLowerCase() === 'sensor' || command.toLowerCase() === 'feedback') {
        readOutLoud("   Haptic sensors recreate the sense of touch by creating a combination of force, vibration and motion sensations to the user. they all work around similar principles of using a combination of force, vibration and motion to recreate the sense of touch.");
        readOutLoud("if you want buy this gadget then press any key on keyboard and say select haptic feedback sensor")



    } else if (command.toLowerCase() === 'select haptic feedback sensor' || command.toLowerCase() === 'select haptic feedback' || command.toLowerCase() === 'select feedback sensor' || command.toLowerCase() === 'select haptic sensor' || command.toLowerCase() === 'select sensor' || command.toLowerCase() === 'select haptic') {
        //selecting Haptic feedback sensor

        document.querySelector('#hapticsensor').checked = true;
        total = total + 250;
        readOutLoud("haptic feedback sensor")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'headphone') {
        readOutLoud("  These headphones provide a safe listening experience to blind users through the open ear design.");
        readOutLoud("if you want buy this gadget then press any key on keyboard and say select headphone")



    } else if (command.toLowerCase() === 'select headphone') {
        //selecting headphone

        document.querySelector('#headphone').checked = true;
        total = total + 30;
        readOutLoud("headphone selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'elvis radio' || command.toLowerCase() === 'radio' || command.toLowerCase() === 'elvis') {
        readOutLoud("  Elvis is a personalized AI tutor developed by Elvis Team. it can hear you and responed accordingly even if you are speaking from across the room with 7 far-field microphones, even in noisy environments.");
        readOutLoud("if you want buy this gadget then press any key on keyboard and say select elvis radio")



    } else if (command.toLowerCase() === 'select elvis radio' || command.toLowerCase() === 'select elvis' || command.toLowerCase() === 'select radio') {
        //selecting specialized microphone

        document.querySelector('#elvisradio').checked = true;
        total = total + 60;
        readOutLoud("elvis radio selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    }

    //merchandise
    //---------------------------------------------------------------------------------------------//
    //---------------------------------------------------------------------------------------------//
    else if (command.toLowerCase() === 'merchandise' || command.toLowerCase() === 'merchandise') {
        readOutLoud("in merchandise we have t-shirt, hoddie, stickers, mobile cover and necklace ");
        readOutLoud("press any key on keyboard and say merchandise name?")
        var x = document.getElementById("merchandise");
        if (x.style.display === "none") {
            x.style.display = "block";
        }

    } else if (command.toLowerCase() === 'tshirt' || command.toLowerCase() === 't-shirt') {
        readOutLoud(" Designed by the team at Elvis, you're definitely in for a style treat with this cotton T-shirt.");
        readOutLoud("if you want buy this merchandise then press any key on keyboard and say select T-shirt")



    } else if (command.toLowerCase() === 'select tshirt' || command.toLowerCase() === 'select t-shirt') {
        //selecting tshirt

        document.querySelector('#tshirt').checked = true;
        total = total + 9;
        readOutLoud("T-shirt selected")
        readOutLoud("we have other services and products too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    }
    //hoddie is selected...
    else if (command.toLowerCase() === 'hoddie') {
        readOutLoud(" Hoddie with Elvis logo print on the front and melange effect, has an attached hood with eyelet detail and a drawstring fastening, long sleeves, and a kangaroo patch pocket on the front. ");
        readOutLoud("if you want buy this merchandise then press any key on keyboard and say select hoddie")



    } else if (command.toLowerCase() === 'select hoddie') {
        //selecting hoddie

        document.querySelector('#hoddie').checked = true;
        total = total + 15;
        readOutLoud("hoddie selected")
        readOutLoud("we have other services and products too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'stickers' || command.toLowerCase() === 'sticker') {
        readOutLoud(" The Offcial Elvis Sticker Extremely easy to use, these stickers can be applied on almost any flat surface. It brings about an entirely new transformation where ever applied in a matter of minutes. ");
        readOutLoud("if you want buy this merchandise then press any key on keyboard and say select stickers")



    } else if (command.toLowerCase() === 'select stickers' || command.toLowerCase() === 'sticker') {
        //selecting stickers

        document.querySelector('#stickers').checked = true;
        total = total + 3;
        readOutLoud("Stickers selected")
        readOutLoud("we have other services and products too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'mobile cover' || command.toLowerCase() === 'mobile' || command.toLowerCase() === 'cover') {
        readOutLoud(" The offcial mobile cover case designed by Elvis team which Save you from the heartbreak and agony of watching the scratches and damages on your device.");
        readOutLoud("if you want buy this merchandise then press any key on keyboard and say select mobile cover")



    } else if (command.toLowerCase() === 'select mobile cover' || command.toLowerCase() === 'select mobile' || command.toLowerCase() === 'select cover') {
        //selecting specialized microphone

        document.querySelector('#mobcover').checked = true;
        total = total + 7;
        readOutLoud("Mobile cover selected")
        readOutLoud("we have other services too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'necklace') {
        readOutLoud(" Beautify your neckline with this necklace from Elvis Necklace. It goes gracefully with a range of party outfits. ");
        readOutLoud("if you want buy this merchandise then press any key on keyboard and say select necklace")



    } else if (command.toLowerCase() === 'select necklace') {
        //selecting stickers

        document.querySelector('#necklace').checked = true;
        total = total + 11;
        readOutLoud("necklace selected")
        readOutLoud("we have other services and products too, if you want explore more then press any key on keyboard and say explore or you just say proceed to payment.");



    } else if (command.toLowerCase() === 'proceed to payment' || command.toLowerCase() === 'payment') {
        // payment

        //checking which checkbox are selected and setting selectedcheckbox variable its value accordingly.
        if (document.querySelector('#universitypack').checked === true) {
            selectedcheckbox = selectedcheckbox + ", University package";
        }
        if (document.querySelector('#schoolpack').checked === true) {
            selectedcheckbox = selectedcheckbox + ", school package";
        }
        if (document.querySelector('#primarypack').checked === true) {
            selectedcheckbox = selectedcheckbox + ", primary package";
        }
        if (document.querySelector('#specipack').checked === true) {
            selectedcheckbox = selectedcheckbox + ", specific package";
        }
        if (document.querySelector('#masterpack').checked === true) {
            selectedcheckbox = selectedcheckbox + ", master's package";
        }
        if (document.querySelector('#modules').checked === true) {
            selectedcheckbox = selectedcheckbox + ", modules";
        }
        if (document.querySelector('#lectures').checked === true) {
            selectedcheckbox = selectedcheckbox + ", lectures ";
        }
        if (document.querySelector('#audiobooks').checked === true) {
            selectedcheckbox = selectedcheckbox + ", Audio Books";
        }
        if (document.querySelector('#personalizedsp').checked === true) {
            selectedcheckbox = selectedcheckbox + ", personalized speakers ";
        }
        if (document.querySelector('#motivationalst').checked === true) {
            selectedcheckbox = selectedcheckbox + ", motivational stories ";
        }
        if (document.querySelector('#braillekey').checked === true) {
            selectedcheckbox = selectedcheckbox + ", Braille Keyboard ";
        }
        if (document.querySelector('#specialmicro').checked === true) {
            selectedcheckbox = selectedcheckbox + ", Specialized Microphone ";
        }
        if (document.querySelector('#hapticsensor').checked === true) {
            selectedcheckbox = selectedcheckbox + ", haptic feedback sensor ";
        }
        if (document.querySelector('#headphone').checked === true) {
            selectedcheckbox = selectedcheckbox + ", headphone ";
        }
        if (document.querySelector('#elvisradio').checked === true) {
            selectedcheckbox = selectedcheckbox + ", elvis radio ";
        }
        if (document.querySelector('#tshirt').checked === true) {
            selectedcheckbox = selectedcheckbox + ", t-shirt ";
        }
        if (document.querySelector('#hoddie').checked === true) {
            selectedcheckbox = selectedcheckbox + ", Hoddie ";
        }
        if (document.querySelector('#stickers').checked === true) {
            selectedcheckbox = selectedcheckbox + ", stickers";
        }
        if (document.querySelector('#mobcover').checked === true) {
            selectedcheckbox = selectedcheckbox + ", Mobile cover";
        }
        if (document.querySelector('#necklace').checked === true) {
            selectedcheckbox = selectedcheckbox + ", Necklace";
        }




        readOutLoud("you have " + selectedcheckbox + ", in your cart");
        readOutLoud(" and you have total of " + total + "$,");
        readOutLoud("you can pay us with both credit card and debit card which one you want to proceed with")

    } else if (command.toLowerCase() === 'explore' || command.toLowerCase() === 'explore more') {
        var mess = "we have 4 services to offer, packages, audio library, gadgets and merchandise.";
        readOutLoud(mess);
        var askname = "press key on keyboard and tell which one you want to select ?";
        readOutLoud(askname);

    } else if (command.toLowerCase() === 'credit card' || command.toLowerCase() === 'credit') {
        window.location.href = "payment.html?card=credit";

    } else if (command.toLowerCase() === 'debit card' || command.toLowerCase() === 'debit') {
        window.location.href = "payment.html?card=debit";

    } else {
        readOutLoud("I am sorry! i didn't catch that");
    }

};
recognition.onspeechend = function() {
    recognition.stop();
};
recognition.onerror = function(event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}

$(document).keypress(function(event) {
    var keycode = (event.keycode ? event.keyCode : event.which);
    if (keycode > 0) {
        recognition.start();
    }
});


function readOutLoud(message) {
    var speech = new SpeechSynthesisUtterance();

    // Set the text and voice attributes.
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}