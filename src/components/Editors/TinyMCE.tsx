import { Editor } from "@tinymce/tinymce-react";

const TinyMCE = () => {
    return (
        <Editor
            apiKey="jru39adkbteqkcm9hdytbyou9xp5b5rgqq77sk8mqrysywle"
            init={{
                height: 600,
                menubar: false,
                toolbar_mode: "wrap",

                plugins: [
                    "lists",
                    "link",
                    "image",
                    "media",
                    "table",
                    "code",
                    "autolink",
                    "directionality"
                ],

                toolbar:
                    // line 1 - text formatting
                    "bold italic underline strikethrough | fontfamily | forecolor | alignleft aligncenter alignright alignjustify bullist numlist |" +

                    // line 2 - alignment - lists + indent - media
                    " image link media | undo redo" +
                    ""
            }}
        />
    );
};

export default TinyMCE;