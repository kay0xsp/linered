<template>
    <div>
        <div id="form_add_product">
            <strong>Ajouter un produit</strong>
            <form>
                <input type="text" placeholder="Nom de l'article" required>
                <input type="number" placeholder="Prix" required>
                <select name="categories" id="category-select" required>
                    <option value="">-- Choix de la catégorie --</option>
                    <option value="dog">Véhicule</option>
                    <option value="cat">Mode</option>
                    <option value="hamster">Multimédia</option>
                    <option value="parrot">Maison</option>
                </select>
                <input type="file" placeholder="image" accept="image/jpeg" @change="uploadImage" ref="file" required>
                <input type="submit" id="submit" value="Envoyer" @click="submitFile">
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
    
        methods: {
            uploadImage(){
                this.Images = this.$refs.file.files[0];
                console.log(this.Images = this.$refs.file.files[0]);
            },
            submitFile() {
                const formData = new FormData();
                formData.append('file', this.Images);
                const headers = { 'Content-Type': 'multipart/form-data' };
                axios.post('https://httpbin.org/post', formData, { headers }).then((res) => {
                res.data.files; // binary representation of the file
                res.status; // HTTP status
                });
            }
        }
    }
</script>

<style>

#form_add_product{
    width:480px;
    height:auto;
    margin:0 auto;
    
    background-color: white;
    border-radius:0.25em;
    padding:2em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

#form_add_product form{
    display:flex;
    flex-direction: column;
}

#form_add_product form input, #form_add_product form select{
    padding:0.5em;
    margin-bottom:0.5em;
    border:1px solid rgb(192, 192, 192);
    border-radius:0.25em;
}

#form_add_product strong{
    display:block;
    text-transform: uppercase;
    padding-bottom:1em;
}

#submit{
    background-color: rgb(0, 0, 0);
    color:white;
    font-weight: bold;
    transition:1s;
}

#submit:hover{
    color:black;
    background-color:rgba(127, 255, 212, 0.384);
}

</style>