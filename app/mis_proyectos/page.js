import misProyectos_Styles from '../../public/misProyectos.module.css';
import FlipCard from '../components/FlipCard';
export default function Mis_Proyectos() {
    return(
        <section className={misProyectos_Styles.misProyectos_page}>
            <FlipCard img_route={"/imgs/Leifza.png"} description={"Logo de Leifza"} url={"https://github.com/AdrianSanchez2/Leifza"}/>
        </section>
    );
};