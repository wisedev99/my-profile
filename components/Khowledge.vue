<template>
    <div id="khowledge" class="w-full px-4 py-8 flex flex-col justify-center items-start">
        <div class=" w-2/3">
            <div class="w-full flex justify-center">
                <span class="text-3xl text-white text-center ">
                    {{ mainWord }}
                </span>
            </div>
            <div class="bg-slate-400">
                <span>{{ }}</span>
                <div class=" grid grid-cols-2 gap-2 justify-items-stretch">
                    <div v-for="language, in technologies?.languages" :key="language.id"
                        :class="{ 'justify-self-end': language.id == 2 }" class="col-span-1 px-2 p-2 justify-self-start">
                        {{ language.name }}
                    </div>
                </div>
            </div>
        </div>
        <div id="myDiagramDiv" class="w-full h-96"></div>
    </div>
</template>
<script setup>
import go from 'gojs'
import { onMounted } from 'vue';

const mainWord = "FullStack Developer"

const technologies = {
    languages: [
        {
            id: 1,
            name: "Javascript",
            frameworks: [
                {
                    id: 1,
                    name: "Vue JS",
                    description: "1 year experience",
                    technologies: [
                        {
                            id: 1,
                            name: "Nuxt JS",
                            description: "1 year experience",
                        }
                    ]
                },
                {
                    id: 1,
                    name: "React",
                    description: "Experience of 4-5 months",

                },
                {
                    id: 2,
                    name: "NodeJS, Express-Js",
                    description: "Experience of 4-5 months",

                },
            ]
        },
        {
            id: 2,
            name: "Php",
            frameworks: [
                {
                    id: 1,
                    name: "Laravel",
                    description: "1 year experience",

                },

            ]

        },
    ],
}
const nodeDataArray = ref([]);
const linksData = ref([]);

onMounted(() => {
    const myDiagram =
        new go.Diagram("myDiagramDiv",  // create a Diagram for the HTML Div element
            {
                // automatically scale down to show whole tree
                "undoManager.isEnabled": true, isReadOnly: false,

            });  // enable undo & redo

    // define a simple Node template
    myDiagram.nodeTemplate =
        new go.Node("Auto")  // the Shape will automatically surround the TextBlock
            // add a Shape and a TextBlock to this "Auto" Panel
            .add(new go.Shape("RoundedRectangle",
                { strokeWidth: 1, fill: "black" })
                // no border; default fill is white
                .bind("fill", "color"))  // Shape.fill is bound to Node.data.color
            .add(new go.TextBlock({ margin: 8, stroke: "#333" })  // some room around the text
                .bind("text", "name"));  // TextBlock.text is bound to Node.data.key

    // but use the default Link template, by not setting Diagram.linkTemplate
    for (let i = 0; i < technologies.languages.length; i++) {
        const language = technologies.languages[i];

        nodeDataArray.value.push({
            key: language.id, name: language.name, color: 'orange'
        })
        linksData.value.push({
            from: language.id, to: language.id == 1 ? 11 : 21
        })

        for (let j = 0; j < language.frameworks.length; j++) {
            const framework = language.frameworks[j];
            if (language.id === 1) {

            }
            nodeDataArray.value.push({
                key: language.id === 1 ? 11 : 21, name: framework.name, color: 'blue',
            })
        }


    }
    // create the model data that will be represented by Nodes and Links
    myDiagram.model = new go.GraphLinksModel(
        nodeDataArray.value,
        linksData.value
    );
})

</script>
