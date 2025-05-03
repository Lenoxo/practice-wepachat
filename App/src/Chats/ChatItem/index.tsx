import './index.css';

interface Props {
    name: string;
    imgLink: string;
}

export function ChatItem({ name, imgLink }: Props) {
    return (
        <div className="chatItem">
            <img className="chatItem__img" src={imgLink} alt="contact" />
            <p>{name}</p>
        </div>
    );
}
