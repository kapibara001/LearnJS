import "./pageUp.css";

function clickBtn() {
    const btn = document.getElementsByClassName('grid-window-logo');
    btn.
}

export function ButtonPageUp() {
    return (
        <div className="grid-window-logo" onClick={clickBtn}>
            Back
        </div>
    )
}