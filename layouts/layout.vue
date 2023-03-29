<template>
    <div>
        <Head>
            <Title>포트폴리오</Title>
            <Meta name="discription" content="프론트엔드 포트폴리오"/>
            <Link rel="shortcut icon" href="/path/to/favicon.ico"/>
        </Head>
        <header>
            <NuxtLink to="/">HOME</NuxtLink>
            <NuxtLink to="/about">ABOUT</NuxtLink>
            <NuxtLink to="/work">WORK</NuxtLink>
        </header>
        <slot/>
        <footer></footer>
    </div>
</template>