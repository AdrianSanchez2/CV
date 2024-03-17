import Link from 'next/link';
import sobreMiStyles from '../../public/sobreMi.module.css';
export default function SobreMi() {
    return(
        <section className={sobreMiStyles.sobreMi_page}>
            <ul>
                <li className={sobreMiStyles.listItem}><Link href={""}>Descripcion de mi mismo</Link></li>
                <li className={sobreMiStyles.listItem}><Link href={""}>Mi experienciaLaboral</Link></li>
                <li className={sobreMiStyles.listItem}><Link href={""}>Formación eductiva</Link></li>
                <li className={sobreMiStyles.listItem}><Link href={""}>Cursos y Conocimientos</Link></li>
            </ul>
        </section>
    );
}