import image from  '../assets/입주청소.jpg';

function Homepage(){
    return(
        <div>
            <h1>
                기초 청소 
            </h1>
            <img src={image} alt="기초청소 사진"/>
            <p>연락처:</p>
        </div>
    )
}