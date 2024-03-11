import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://expdeybi.github.io', /* aqui colocarias el nombre de tu cuenta*/
    base: '/astroBasico',  /* aqui colocarias el nombre de tu repositorio*/
    build: {
        assets: 'astro' /// muy importante porque corrige el detalle que cuando se genera
                        /// el directorio dist se evita que directorio se llame _astro
    }
});
