<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Will You Be My Valentine?</title>

<style>
    body {
        margin: 0;
        font-family: "Poppins", sans-serif;
        background: linear-gradient(135deg, #ff9a9e, #fad0c4);
        overflow-x: hidden;
        text-align: center;
        color: #fff;
    }

    h1 {
        margin-top: 70px;
        font-size: 32px;
        padding: 0 20px;
    }

    .btn-container {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }

    button {
        padding: 14px 30px;
        border: none;
        border-radius: 30px;
        font-size: 18px;
        cursor: pointer;
        transition: 0.3s;
        font-weight: bold;
    }

    .yes    { background: #ff3860; color: #fff; }
    .maybe  { background: #ffdd57; color: #000; }
    .ofc    { background: #1dd1a1; color: #000; }
    .no     { background: #576574; color: #fff; }

    button:hover {
        transform: scale(1.1);
        opacity: 0.9;
    }

    /* Floating hearts */
    .heart {
        position: fixed;
        bottom: -10px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 20px;
        animation: floatUp 5s linear infinite;
    }

    @keyframes floatUp {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-120vh) scale(1.8); opacity: 0; }
    }

    /* Hidden thank you message */
    #finalMessage {
        display: none;
        margin-top: 50px;
        font-size: 26px;
        padding: 0 20px;
    }
</style>
</head>

<body>

<!-- Background Music -->
<audio id="bgMusic" autoplay loop>
    <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c2b1492c4a.mp3?filename=romantic-music-110085.mp3" type="audio/mp3">
</audio>

<h1>De
