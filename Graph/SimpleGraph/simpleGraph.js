import ListQueue from "../../Queue/listQueue.js";

class Graph{
    constructor(){
        this.adjList = {}
    }
    
    addVertex(vertex){
        this.adjList[vertex] = [];
    }

    addEdge(v1,v2){
        if(this.adjList[v1].constructor === Array && this.adjList[v2].constructor === Array){
            if(!this.adjList[v1].includes(v2)) this.adjList[v1].push(v2);
            if(!this.adjList[v2].includes(v1)) this.adjList[v2].push(v1);
        }
        else throw new Error("Can't connect the vertex befor adding it in graph!");
    }

    bfs(startVertex){
        let queue = new ListQueue(50);
        queue.enqueue(startVertex);
        let resultStr = '';
        let visited = {};
        visited[startVertex] = true;
        while(!queue.isEmpty()){
            const {data} = queue.dequeue();
            const currVertex = data;
            resultStr += currVertex + " --> ";
            this.adjList[currVertex].forEach(adjVertex => {
                if(!visited[adjVertex]){
                    visited[adjVertex] = true;
                    queue.enqueue(adjVertex);
                }
            });
        }
        return resultStr.slice(0,-5);
    }
    dfs(startVertex) {
        let resultStr = '';
        let visited = {};
        const dfsRecursive = (vertex) => {
            visited[vertex] = true;
            resultStr += vertex + " --> ";
            
            this.adjList[vertex].forEach(adjVertex => {
                if (!visited[adjVertex]) {
                    dfsRecursive(adjVertex);
                }
            });
        };
        dfsRecursive(startVertex);
        return resultStr.slice(0, -5);
    }
}


let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('D', 'B');
graph.addEdge('D', 'C');




console.log(graph.bfs('A'));