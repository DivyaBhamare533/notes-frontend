const API_URL = "https://qyaq4am5l0.execute-api.ap-south-1.amazonaws.com/prod/note";

// ---------------- SAVE NOTE ----------------

async function saveNote() {

    try {

        const filename = document.getElementById("filename").value;
        const content = document.getElementById("content").value;

        if (filename === "" || content === "") {
            alert("Please enter filename and content.");
            return;
        }

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                filename: filename,
                content: content
            })
        });

        const data = await response.json();

        alert(data.message);

        document.getElementById("filename").value = "";
        document.getElementById("content").value = "";

    } catch (err) {

        alert(err.message);

    }

}

// ---------------- READ NOTE ----------------

async function readNote() {

    try {

        const filename = document.getElementById("readFilename").value;

        if (filename === "") {
            alert("Enter filename.");
            return;
        }

        const response = await fetch(
            API_URL + "?filename=" + encodeURIComponent(filename)
        );

        const data = await response.json();

        document.getElementById("result").innerHTML = data.content;

    } catch (err) {

        alert(err.message);

    }

}
// Record website visit automatically

window.addEventListener("load", async () => {

    try {

        await fetch(
            "https://qyaq4am5l0.execute-api.ap-south-1.amazonaws.com/prod/visit"
        );

        console.log("Visit Recorded");

    } catch (error) {

        console.log(error);

    }

});