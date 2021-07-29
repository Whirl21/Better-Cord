 

function updatexD() {
   
    var idoc = document.getElementById('preview-window').contentWindow.document;
    idoc.open();
   
    idoc.write(editor.getValue());
    idoc.close();
}

function setupEditor() {
    
    window.editor = ace.edit("editor");
  
    editor.setTheme("ace/theme/monokai");
    
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(
        
        `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width initial-scale=1.0">
<title>Document</title>
</head>
 <body>
  
 </body>
</html>
        `, 1);

       
    editor.getSession().on('change', function() {
        updatexD();
    })
    editor.focus();

    editor.setOptions({
        fontSize: "15pt",
        showLineNumbers: true,
        showGutter: false,
        vScrollBarAlwaysVisible: false,
        
    })

    editor.setShowPrintMargin(false);
    editor.setBehavioursEnabled(false);
}

setupEditor();