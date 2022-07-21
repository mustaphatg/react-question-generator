export const question_forms = [
    'What is the meaning of "$word" ?',
    'The meaning of "$word" is _________  ? ',
    'What do you understand by "$word" ?  ',
    '"$word" means _________ .'
]








export function generateQuestions(translations) {

    var questions = []

    translations.forEach(translation => {


        // get last word
        var words = translation.split(" ")
        var last_word = words.pop()


        // get random  question form
        var random_index = Math.floor(Math.random() * 4)
        var rand_question_form = question_forms[random_index]
        var que = rand_question_form.replace(/\$word/, last_word)


        // append to questions
        questions.push(que)

    })



    return questions

}






export function Export2Doc(element, filename = '') {
    var html = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var footer = "</body></html>";
     html = html+document.getElementById(element).innerHTML+footer;


    //link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

    //file name
    filename = filename?filename+'.doc': 'document.doc';

    // Creates the  download link element dynamically
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    //Link to the file
    downloadLink.href = url;

    //Setting up file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
    //Remove the a tag after donwload starts.
    document.body.removeChild(downloadLink);
}





function cleanOp(op){
    var t = op.replace(/[^a-z0-9]/gi, " ")
    return t
}




export function getOptions(translations, question_num ){
    
    var question_translation = translations[question_num]
    
   // console.log(question_translation)
    
    
   var o_one = question_translation.split(" ").splice(-1).join(" ");
   var o_two = question_translation.split(" ").splice(-2).join(" ")
   var o_three = question_translation.split(" ").splice(-3).join(" ")
   var o_four = question_translation.split(" ").splice(-4).join(" ")
   var o_five = question_translation.split(" ").splice(-5).join(" ")
    
    
    var one = cleanOp(o_one)
    var two = cleanOp(o_two)
    var three = cleanOp(o_three)
    var four = cleanOp(o_four)
    var five = cleanOp(o_five)
    
    var full = cleanOp(question_translation)
    
    return [
        { value : one, label : one },
        { value : two, label : two },
        { value : three, label : three },
        { value : four , label : four },
        { value : five , label : five },
        { value : full , label : full },
        
    ]

    

}