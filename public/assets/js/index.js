
function displayNotes() {
    $.get("/allnotesdata", function (notes) {
        console.log("from notes db", notes);
        $(".list").empty();
        for (var i = 0; i < notes.length; i++) {
            var div = $("<div>").addClass("div");
            var span = $("<span>").text(notes[i].title);
            var p = $("<p>").text(notes[i].body);
            var buttonDiv = $("<button>").addClass("button-delete").text("delete").attr("name",notes[i].id)
             div.append(span,buttonDiv, p);
 
            //buttonDiv.append(button);
           // $(".list").append(buttonDiv);
            $(".list").append(div);
        }
    })
}
displayNotes();
$("#save-btn").on("click", function (event) {
    event.preventDefault();
    var newTitle = {
        title: $("#note-title").val().trim(),
        note: $("#note-text").val().trim()
    };
    $.post("/note", newTitle, function (data) {
        //console.log(data)
        displayNotes();
        if (data) {
            $(".font-weight-bold").append(data.title);
            $(".mt-2").append(`${data.note}<hr>`);
        } else {
            $(".font-weight-bold").text(
                "The force is not strong with this one. Your character was not found.");
        }
        $("#note-title").val("");
        $("#note-text").val("");
    });
});
// create a function to delete the clicked note

$(document).on("click",".button-delete", function(event) {
    console.log("Clicked")
var id = $(this).attr("name");
 console.log("that's id:",id)
// Send the DELETE request.
$.ajax("/note/" + id, {
type: "DELETE"
}).then(
function() {
console.log("deleted notes", id);
// Reload the page to get the updated list
displayNotes();
}
);
});
