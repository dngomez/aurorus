import { Layout } from "@/components/Layout"
import { useRef } from "react"

const VIDEO_URLS = [
  "/video3.mp4",
  "/video5.mp4",
  "/video1.mp4",
  "/video4.mp4",
  "/video2.mp4",
]

export function About() {
  const videoRefs = VIDEO_URLS.map(() => useRef<HTMLVideoElement>(null))

  return (
    <Layout title="Nosotros">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <video
            ref={videoRefs[0]}
            controls
            className="w-full md:w-1/4 max-h-[600px] rounded-md"
            autoPlay
            onEnded={() => videoRefs[1].current?.play()}
          >
            <source src={VIDEO_URLS[0]} type="video/mp4" />
          </video>
          <div className="flex flex-col gap-4 w-full md:w-1/2 text-center">
            <h1>AURORUS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quibusdam incidunt porro omnis nam saepe maiores iusto nostrum
              similique, dignissimos ullam illum deserunt aperiam adipisci
              repellat cumque blanditiis, in ut!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quibusdam incidunt porro omnis nam saepe maiores iusto nostrum
              similique, dignissimos ullam illum deserunt aperiam adipisci
              repellat cumque blanditiis, in ut!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quibusdam incidunt porro omnis nam saepe maiores iusto nostrum
              similique, dignissimos ullam illum deserunt aperiam adipisci
              repellat cumque blanditiis, in ut!
            </p>
          </div>
          <video
            ref={videoRefs[1]}
            controls
            className="w-full md:w-1/4 max-h-[600px] rounded-md"
            onEnded={() => videoRefs[2].current?.play()}
          >
            <source src={VIDEO_URLS[1]} type="video/mp4" />
            Tu navegador no soporta el video
          </video>
        </div>
        {/* <div className="flex flex-row gap-4 justify-between">
          <video
            ref={videoRefs[2]}
            controls
            className="w-1/4 max-h-[600px] rounded-md"
            onEnded={() => videoRefs[3].current?.play()}
          >
            <source src={VIDEO_URLS[2]} type="video/mp4" />
          </video>
          <video
            ref={videoRefs[3]}
            controls
            className="w-1/4 max-h-[600px] rounded-md"
            onEnded={() => videoRefs[4].current?.play()}
          >
            <source src={VIDEO_URLS[3]} type="video/mp4" />
          </video>
          <video
            ref={videoRefs[4]}
            controls
            className="w-1/4 max-h-[600px] rounded-md"
          >
            <source src={VIDEO_URLS[4]} type="video/mp4" />
          </video>
        </div> */}
      </div>
    </Layout>
  )
}
