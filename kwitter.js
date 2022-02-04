function log_in() {
    user_name_input = document.getElementById("user_name_input").value;

    localStorage.setItem("user_name", user_name_input);

    window.location = "kwitter_room.html";
}