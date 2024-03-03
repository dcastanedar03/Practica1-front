import Axios from "npm:axios"
import {FreshContext, Handlers, PageProps} from "$fresh/server.ts"

export type Frase = {
    data: string;
}

export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown, Frase>) => {
        const response = await Axios.get<Frase>("https://filmquotes.deno.dev/")
        return ctx.render(response.data)
    }
}

const Page = (props: PageProps<Frase>) => {
    return (
        <body class={"img-fondo1"}>
            <div class="capas">
              <img src="https://i.discogs.com/XCXiemMRkFL2oLIAXcs8cqg8SBH-qevIrflVPm5N7KQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MDg5/MDctMTQ2NjcyNTA0/My02MDE2LmpwZWc.jpeg" class="capa0"/>
              <img src="https://i.discogs.com/XCXiemMRkFL2oLIAXcs8cqg8SBH-qevIrflVPm5N7KQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MDg5/MDctMTQ2NjcyNTA0/My02MDE2LmpwZWc.jpeg" class="capa1"/>
              <img src="https://i.discogs.com/XCXiemMRkFL2oLIAXcs8cqg8SBH-qevIrflVPm5N7KQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MDg5/MDctMTQ2NjcyNTA0/My02MDE2LmpwZWc.jpeg" class="capa2"/>
              <img src="https://i.discogs.com/XCXiemMRkFL2oLIAXcs8cqg8SBH-qevIrflVPm5N7KQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MDg5/MDctMTQ2NjcyNTA0/My02MDE2LmpwZWc.jpeg" class="capa3"/>
              <img src="https://i.discogs.com/XCXiemMRkFL2oLIAXcs8cqg8SBH-qevIrflVPm5N7KQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MDg5/MDctMTQ2NjcyNTA0/My02MDE2LmpwZWc.jpeg" class="capa4"/>
              <a href={"https://youtu.be/xm3YgoEiEDc?si=iu97snIom81RzvT_"}><img src="https://i.discogs.com/XCXiemMRkFL2oLIAXcs8cqg8SBH-qevIrflVPm5N7KQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MDg5/MDctMTQ2NjcyNTA0/My02MDE2LmpwZWc.jpeg" class="capa5"/></a>
            </div>
            <div>
              <p class="texto-api">{props.data}</p>
              <a href={"/frase"}><button class="start-boton"></button></a>
              <a href={"/"}><img class="casa" src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img></a>
            </div>
        </body>
    )
}

export default Page