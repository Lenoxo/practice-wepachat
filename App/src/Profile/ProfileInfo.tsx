import { useContext } from 'react';
import { profilesContext } from '../context';
import './styles.css';

interface Props {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ProfileInfo({ setOpenModal }: Props) {
    const { profiles } = useContext(profilesContext);
    const firstProfile = profiles[0];

    function handleClose() {
        if (setOpenModal) setOpenModal(false);
    }
    return (
        <section className="profile">
            <button onClick={handleClose}>Close</button>
            <img
                className="profile__img"
                src={firstProfile.image}
                alt="/App/src/assets/profile-default.svg"
            />
            <label className="profile__label" htmlFor="name">
                Name
            </label>
            <input className="profile__input" id="name" readOnly value={firstProfile.name}></input>
            <label className="profile__label " htmlFor="description">
                Description
            </label>
            <input
                className="profile__input"
                id="description"
                readOnly
                value={firstProfile.description}
            ></input>
        </section>
    );
}
