import flipCardStyles from './flipCard.css';

export default function FlipCard({img_route, description, url}) {
  return (
    <main>
      <div className="front">
        <img className="imgfront" src={img_route} alt={description} />
      </div>
      <div className="back">
        <a className='gitHub_link' href={url}>Mas información...</a>
      </div>
    </main>
  );
}
