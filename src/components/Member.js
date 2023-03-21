import styled from 'js-styled'
import Image from 'next/image'

const jss = styled(`
member {
  width: 300px;
  aspect-ratio: 9/13;
  position: relative;

  & .cover{
    width: 100%;
    height: 100%;
    border-radius: 5%;
    background-image: url("interior_designer_bg.png");
    background-size: cover;
    transition-property: transform, box-shadow;
    transition-duration: 500ms;
  }

  & img {
    mask-image: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6896008403361344) 8%, rgba(0,0,0,1) 15%);
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50%;
    opacity: 0;
    transition-property: bottom, opacity;
    transition-duration: 500ms;
  }

  & .info {
    width: 100%;
    color: white;
    text-align: center;
    position: absolute;
    bottom: 5%;
    left: 50%;
    translate: -50%;
    transition-property: bottom;
    transition-duration: 500ms;
  }

  &:hover {

    & .cover {
      transform: perspective(900px) rotateX(30deg) translateY(-2%);
      box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75), 0 0 70px 40px rgba(0, 0, 0, .7) inset;
    }

    & img {
      bottom: 7%;
      opacity: 1;
    }

    & .info {
      bottom: 12%;
    }
    
  }

}
`)

export default function Member(props) {
  const classes = jss()
  return (
    <div className={`${classes['member']} ${props.className}`}>
      <div className='cover'></div>
      <Image src="/interior_designer.png" alt="Jeremy" width="280" height="450"/>
      <div className='info'>
        <h2>Jeremy</h2>
        <p>Senior Interior Designer</p>
      </div>
    </div>
  );
}