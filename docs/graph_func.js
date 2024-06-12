class Grafo {
    constructor(v) {
        this.V = v;
        this.initEdges();
    }

    initEdges() {
        this.adjListArray = [];
        this.reset();
    }

    reset() {
        // Crear una nueva lista para cada vértice
        // de modo que los nodos adyacentes puedan ser almacenados
        for (let i = 0; i < this.V; i++) {
            this.adjListArray.push([]);
        }

    }

    // Añadir un borde a un grafo no dirigido
    addEdge(src, dest) {
        // Añadir un borde desde src a dest
        this.adjListArray[src].push(dest);

        // Como el grafo es no dirigido, añadir un borde de dest a src también
        this.adjListArray[dest].push(src);
    }

    removeEdgesOfNode(node) {
        this.adjListArray[node].forEach(element => {
            this.adjListArray[element].splice(this.adjListArray[element].indexOf(node), 1);
        });

        this.adjListArray[node] = [];
    }

    DFSUtil(v, visited, component) {
        visited[v] = true;
        component.push(v);

        for (let x = 0; x < this.adjListArray[v].length; x++) {
            if (!visited[this.adjListArray[v][x]]) {
                this.DFSUtil(this.adjListArray[v][x], visited, component);
            }
        }
    }

    connectedComponents() {
        let visited = new Array(this.V).fill(false);
        let components = [];

        for (let v = 0; v < this.V; ++v) {
            if (!visited[v]) {
                let component = [];
                this.DFSUtil(v, visited, component);
                components.push(component);
            }
        }

        return components;
    }
}

// // Ejemplo de uso
// let grafo = new Grafo(5);
// grafo.addEdge(0, 1);
// grafo.addEdge(0, 4);
// grafo.addEdge(1, 2);
// grafo.addEdge(1, 3);
// grafo.addEdge(1, 4);
// grafo.addEdge(2, 3);
// grafo.addEdge(3, 4);

// console.log("Componentes Conectadas:");
// grafo.connectedComponents();


// let V;
// let adjListArray=[];

// // constructor
// function Graph(v)
// {
//     V = v

//         // define the size of array as
//         // number of vertices

//         // Create a new list for each vertex
//         // such that adjacent nodes can be stored

//         for (let i = 0; i < V; i++) {
//             adjListArray.push([]);
//         }
// }

// // Adds an edge to an undirected graph
// function addEdge(src,dest)
// {
//     // Add an edge from src to dest.
//         adjListArray[src].push(dest);

//         // Since graph is undirected, add an edge from dest
//         // to src also
//         adjListArray[dest].push(src);
// }

// function removeEdgesOfNode(node)
// {
//     adjListArray[node].forEach(element => {
//         adjListArray[element].splice(adjListArray[element].indexOf(node), 1);
//     });

//     adjListArray[node] = [];
// }

// function DFSUtil(v,visited)
// {
//     // Mark the current node as visited and print it
//         visited[v] = true;
//         document.write(v + " ");

//         // Recur for all the vertices
//         // adjacent to this vertex
//         for (let x = 0; x < adjListArray[v].length; x++)
//         {
//             if (!visited[adjListArray[v][x]])
//                 DFSUtil(adjListArray[v][x], visited);
//         }
// }

// function connectedComponents()
// {
//     // Mark all the vertices as not visited
//         let visited = new Array(V);
//         for(let i = 0; i < V; i++)
//         {
//             visited[i] = false;
//         }
//         for (let v = 0; v < V; ++v)
//         {
//             if (!visited[v])
//             {
//                 // print all reachable vertices
//                 // from v
//                 DFSUtil(v, visited);
//                 document.write("<br>");
//             }
//         }
// }
