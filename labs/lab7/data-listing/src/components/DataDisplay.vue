<template>
    <div class="gameContainer">
        <div class="game" v-for="game in games" :key="game.name">
            <img class="boxArt" :src="game.image" :alt="game.name" />
            <div class="gameInfo">
                <p>{{game.name}}</p>
                <p>{{game.language}} {{game.region}}</p>
                <p>Developed by {{game.developer}}</p>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    props: ["games"],
    data: function() {
        return {
            test: "Hello Hello",
        };
    },
    name: "DataDisplay",
}
</script>

<style scoped>
    .gameContainer{
        margin-top: 35px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .game{
        display: flex;
        margin-bottom: 50px;
        margin-right: 35px;
        padding: 25px 17.5px;
        background-color: #5A5F6D;
        border-radius: 40px;
    }

    .boxArt{
        height: 150px;
        width: 130px;
        margin-right: 25px;
        border-radius: 40px;
        object-fit: cover;
    }

    .gameInfo{
        display: flex;
        flex-direction: column;
    }
</style>