import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveCV } from "../api";

const FormCV = () => {
    const [name, setName] = useState("");
    const [birthPlace, setBirthPlace] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [education, setEducation] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveCV({ name, birthPlace, birthDate, education });
        navigate("/cv-preview");
    };

    return (
        <div>
            <h2>Isi Data CV</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nama" onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Tempat Lahir" onChange={(e) => setBirthPlace(e.target.value)} required />
                <input type="date" onChange={(e) => setBirthDate(e.target.value)} required />
                <input type="text" placeholder="Riwayat Pendidikan" onChange={(e) => setEducation(e.target.value)} required />
                <button type="submit">Simpan</button>
            </form>
        </div>
    );
};

export default FormCV;
