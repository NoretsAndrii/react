export default function Slider({ url, onClick, index, maxIndex }) {
  return (
    <div>
      <button onClick={() => onClick('prev')} disabled={index === 0}>
        Prev
      </button>
      <img
        src={url}
        alt=""
        width={600}
        height={400}
        style={{
          objectFit: 'cover',
        }}
      />
      <button onClick={() => onClick('next')} disabled={index === maxIndex}>
        Next
      </button>
    </div>
  );
}
