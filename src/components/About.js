import React, {useState} from 'react'

export default function About() {
    const [btnText, setbtnText] = useState('Enable dark mode');
    const [changeStyle, setChangeStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const ChangeonClick = () => {
        console.log(changeStyle)
        if(changeStyle.color === 'black') {
            setbtnText('Enable light mode');
            setChangeStyle({
                color: 'white',
                backgroundColor: 'black'
            });
        } else {
            setbtnText('Enable dark mode');
            setChangeStyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
        
    }
    return (
        <div className="container my-3" style={changeStyle}>
            <h3>About Us</h3>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={changeStyle}>
                    <h2 className="accordion-header" id="headingOne" style={changeStyle}>
                    <button className="accordion-button" type="button" style={changeStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={changeStyle}>
                    <h2 className="accordion-header" id="headingTwo" style={changeStyle}>
                    <button className="accordion-button collapsed" type="button" style={changeStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={changeStyle}>
                    <h2 className="accordion-header" id="headingThree" style={changeStyle}>
                    <button className="accordion-button collapsed" type="button" style={changeStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary my-3' onClick={ChangeonClick}>{btnText}</button>
        </div>
    )
}
