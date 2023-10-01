body {
    margin: 0;
    padding: 0;
}

h1 {
    color: green;
}

.geeks {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: green;
    border-radius: 13px;
    animation: animate 2s linear infinite;
}

@keyframes animate {
    0% {
        transform: translate(-50%, -50%) 
                   perspective(200px) 
                   rotateX(0deg) 
                   rotateY(0deg);
    }

    50% {
        transform: translate(-50%, -50%) 
                   perspective(200px) 
                   rotateX(-180deg) 
                   rotateY(0deg);
    }

    100% {
        transform: translate(-50%, -50%) 
                   perspective(200px) 
                   rotateX(-180deg) 
                   rotateY(-180deg);
    }
}