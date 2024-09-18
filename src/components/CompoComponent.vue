<template>
  <div>
    <header class="encabezado">
        <img src="https://w7.pngwing.com/pngs/580/604/png-transparent-spiderman-illustration-marvel-universe-ultimate-spider-man-iron-man-comic-book-spider-man.png" alt="">
        <nav class="menu">
            <li>Home</li>
            <li>About</li>
            <li>Review</li>
            <li>About us</li>
        </nav>
    </header>
  </div>
</template>

<script>

export default {
     name: 'CompoComponent'
}
</script>

<style>
.encabezado{
    height: 80px;
    background: #000;
    display: flex;
    justify-content: space-around;
    color: #fff;

}

.menu{
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-content: center;
    list-style: none;
    gap: 2rem;
}

.menu li {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
}

.menu li:hover{
    cursor: pointer;
    background: #fff;
    color: #000;
}
</style>