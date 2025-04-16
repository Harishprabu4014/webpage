function respond(answer) {
    const response = document.getElementById('response');
    if (answer === 'yes') {
        response.innerHTML = "Yaaay!! 💕 I'm the luckiest person alive!";
    } else {
        response.innerHTML = "😢 I still love you...";
    }
}