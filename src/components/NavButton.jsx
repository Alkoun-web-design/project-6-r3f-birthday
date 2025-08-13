import '../styles/App.css';
import '../styles/NavButton.css';


// export default function NavButton (id, btnClass, title, imgAlt, src, pClass, name, page, onClick) {
export default function NavButton (props) {

    return (
        <button id={props.id} className={props.btnClass} title={props.title} onClick={() => props.onClick(props.page)}>
            <div className="button">
                <div className="nav-logo">
                    {props.src}
                </div>
                <p className={props.pClass}>{props.name}</p>
            </div>
        </button>
    );
}

