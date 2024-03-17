import homeStyles from '../public/home.module.css';

export default function Home() {
  return (
    <section className={homeStyles.home_page}>
      <img className={homeStyles.profile_img} src='/imgs/img_perfil.jpg' alt='Foto de perfil del CV'/>
    </section>
  );
}