export default function EmbeddedImage({src}) {
    return (
        <video
        src={src}
        autoPlay
        muted
        loop
        width={"400px"}
        ></video>
    )
}