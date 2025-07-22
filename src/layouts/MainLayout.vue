<template>
  <main>
    <header class="overflow-x-hidden relative transition-all duration-300 ease-in-out"
      :class="{ 'bg-black/35': !showInfo, 'bg-black/85': showInfo }">
      <img src="@/assets/asafoetidaWallpaper.jpg" class="fixed top-0 right-0 bottom-0 left-0 w-full -z-20"
        alt="asafoetidaWallpaper">
      <!--Header-->
      <div class="z-10 w-full text-white min-h-[80px] flex items-center justify-between px-5">
        <img src="@/assets/img1/Recurso 7.png" alt="" class="mt-2 w-20">
        <nav class="flex gap-5 text-xl">
          <RouterLink to="/">Producto</RouterLink>
          <RouterLink to="/">Bienestar</RouterLink>
          <RouterLink to="/">Contacto</RouterLink>
          <RouterLink to="/">Prasadam</RouterLink>
        </nav>
      </div>
      <!--Products-->
      <section :class="{ 'grid-cols-3': showInfo, 'grid-cols-2': !showInfo }"
        class="grid relative z-10 flex-col flex-1 items-center px-5 py-10  h-[calc(100vh-80px)] ">
  <img v-if="showInfo" class="absolute top-0 right-0 bottom-0 z-20 w-24 cursor-pointer animate-delay-[990ms]" :key="imageSelected" :class="{ 'animate-fade-down': imageSelected === imgAsafPremium, 'animate-fade-up': imageSelected === imgAsafNormal }" @click="handleChange(imageSelected === imgAsafPremium ? imgAsafNormal : imgAsafPremium)" :src="imageSelected === imgAsafPremium ? imgAsafNormal : imgAsafPremium" alt="">

        <!--Title-->
        <div class="pl-1">
          <h2 class="text-white font-bubblegum animate-fade" :key="imageSelected" :class="{ 'text-7xl': showInfo, 'text-9xl': !showInfo, 'animate-fade-left': showInfo }">Condimento</h2>
          <p
          :key="imageSelected"

            class="inline-block z-40 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 font-merienda animate-fade" :class="{ 'text-7xl': showInfo, 'text-9xl': !showInfo }">
            ASAFOETIDA</p>
            <div v-if="imageSelected === imgAsafPremium && showInfo" class="flex text-8xl font-semibold text-white font-ephesis">
              <span class="animate-fade-left animate-delay-[0ms]">P</span>
              <span class="animate-fade-left animate-delay-[100ms]">r</span>
              <span class="animate-fade-left animate-delay-[200ms]">e</span>
              <span class="animate-fade-left animate-delay-[300ms]">m</span>
              <span class="animate-fade-left animate-delay-[400ms]">i</span>
              <span class="animate-fade-left animate-delay-[500ms]">u</span>
              <span class="animate-fade-left animate-delay-[600ms]">m</span>
            </div>
            <p v-if="imageSelected === imgAsafPremium && showInfo" class="text-6xl font-semibold bg-gradient-to-r from-yellow-600 to-amber-700 bg-clip-text text-transparent font-goldman  animate-delay-[700ms] animate-fade-left">Extra Fuerte</p>
            <p v-if="imageSelected === imgAsafNormal && showInfo" class="text-7xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent font-goldman  animate-delay-[700ms] animate-fade-left">Fuerte</p>
            <p v-if="imageSelected === imgAsafNormal && showInfo" class="text-7xl font-semibold bg-gradient-to-r text-white bg-clip-text text font-bubblegum  animate-delay-[900ms] animate-fade-left">Sin Gluten</p>
        </div>
        <div class="flex flex-col justify-center items-center w-full">
          <article class="flex justify-around">
            <img v-if="!showInfo || imageSelected === imgAsafPremium" @click="changeImage(imgAsafPremium)" :src="imgAsafPremium" alt="" class="w-[14vw] cursor-pointer animate-fade-up animate-delay-[50ms] transition-all duration-300 ease-in-out hover:scale-105">
            <img v-if="!showInfo || imageSelected === imgAsafNormal" @click="changeImage(imgAsafNormal)" :src="imgAsafNormal" alt="" class="w-[14vw] cursor-pointer animate-fade-up animate-delay-[150ms] transition-all duration-300 ease-in-out hover:scale-105">
          </article>

          <div v-if="!showInfo" class="p-5 rounded-lg backdrop-blur-2xl bg-black/50">
            <p class="text-sm text-white font- font-poppins">Haga click en cualquier producto para ver mas detalles</p>
          </div>
        </div>

          <div v-if="showInfo && imageSelected === imgAsafPremium" class="overflow-auto font-poppins animate-fade-down w-full max-h-[80dvh] p-6 sm:p-8 mx-auto mb-10    rounded-xl border border-orange-200 shadow-lg">
            <div class="flex gap-2 items-start">
              <p

class="inline-block text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 font-merienda animate-fade-left" >
Asafoetida</p>
<div v-if="imageSelected === imgAsafPremium && showInfo" class="flex text-5xl font-semibold text-white font-ephesis">
              <span class="animate-fade-left animate-delay-[50ms]">P</span>
              <span class="animate-fade-left animate-delay-[150ms]">r</span>
              <span class="animate-fade-left animate-delay-[250ms]">e</span>
              <span class="animate-fade-left animate-delay-[350ms]">m</span>
              <span class="animate-fade-left animate-delay-[450ms]">i</span>
              <span class="animate-fade-left animate-delay-[550ms]">u</span>
              <span class="animate-fade-left animate-delay-[650ms]">m</span>
            </div>

            </div>
            <p v-if="imageSelected === imgAsafPremium && showInfo" class="text-6xl font-semibold bg-gradient-to-r from-yellow-600 to-amber-700 bg-clip-text text-transparent font-poppins  animate-delay-[700ms] animate-fade-left">Extra Fuerte</p>

  <p class="mb-4 text-lg text-white">
    Especia tradicional con raíces profundas en la cocina del sur de Asia, perfecta para restaurantes que buscan sabor auténtico, y también ideal para quien cocina con pasión en casa.
  </p>

  <p class="mb-6 text-lg text-white">
    Su principal virtud: <strong>potencia el sabor</strong> de curris, guisos y legumbres, añadiendo esa nota umami que despierta el paladar.
  </p>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-red-400">Ingredientes:</h3>
    <ul class="space-y-1 list-disc list-inside text-white">
      <li>Harina de trigo</li>
      <li>Goma Arábica</li>
      <li>Asafétida pura</li>
      <li>Grasa vegetal</li>
    </ul>
  </div>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-green-400">Beneficios destacados:</h3>
    <ul class="space-y-3 text-white">
      <li class="flex items-start">
        <span class="mt-1 mr-3 text-xl text-yellow-600">🔥</span>
        <span><strong>Realza sabor sin sal extra:</strong> Aporta notas tipo cebolla o ajo al freírse en aceite, ideal para curris y guisos.</span>
      </li>
      <li class="flex items-start">
        <span class="mt-1 mr-3 text-xl text-purple-500">🧘</span>
        <span><strong>Mejora digestión:</strong> Tradicionalmente se ha utilizado para apoyar el sistema digestivo, reduciendo la hinchazón y los gases.</span>
      </li>
      <li class="flex items-start">
        <span class="mt-1 mr-3 text-xl text-green-600">🌿</span>
        <span><strong>Propiedades naturales:</strong> Rico en compuestos bioactivos, la asafétida se ha valorado por sus posibles efectos antimicrobianos y antiinflamatorios.</span>
      </li>
      <li class="flex items-start">
        <span class="mt-1 mr-3 text-xl text-indigo-500">🧂</span>
        <span><strong>Alternativa al ajo/cebolla:</strong> Úsela en dietas que los evitan; ofrece un sabor similar, sin causar irritación estomacal.</span>
      </li>
    </ul>
  </div>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-indigo-400">Uso recomendado:</h3>
    <p class="text-white">
      Añada una pizca al aceite caliente justo antes de incorporar otras especias. Ideal para preparar el clásico <em>tadka</em> utilizado en dals, sopas y salteados. <strong>Rinde mucho</strong>, gracias a su concentración.
    </p>
  </div>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-yellow-400">¿Por qué Premium?</h3>
    <p class="text-white">
      Esta versión contiene una mayor proporción de asafétida pura, lo que se traduce en <strong>más sabor, más aroma y más rendimiento con menos cantidad</strong>. Está recomendada para quienes buscan un nivel superior en sabor y calidad.
    </p>
  </div>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-blue-400">Certificaciones de calidad:</h3>
    <ul class="space-y-1 list-disc list-inside text-white">
      <li><strong>ISO 9001:2015</strong> – Sistema de gestión de calidad internacional.</li>
      <li><strong>FSSAI</strong> – Certificación de seguridad alimentaria emitida por India.</li>
      <li><strong>Spice Board India</strong> – Aval oficial para exportación de especias de calidad.</li>
    </ul>
  </div>

  <div class="p-4 bg-yellow-100 rounded-md border-l-4 border-yellow-500">
    <p class="text-sm text-yellow-900">
      <strong>Nota importante:</strong> Esta versión contiene <span class="font-semibold">gluten</span> (harina de trigo). Si necesita una opción sin gluten, le recomendamos la versión <span class="italic">Normal</span>.
    </p>
  </div>
</div>
<div v-if="showInfo && imageSelected === imgAsafNormal" class="overflow-auto  w-full font-poppins animate-fade-up  max-h-[80dvh] p-2 mx-auto mb-10 text-white rounded-xl border border-yellow-200 shadow-lg">
  <div class="flex gap-1 items-center px-0">
    <p

    class="inline-block text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 font-merienda animate-fade-right" >
    Asafoetida</p>
    <p class="px-1.5 text-5xl italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 animate-fade-up font-merienda">Fuerte</p>
  </div>
  <h3 class="mb-2 text-xl italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">(Sin gluten)</h3>

  <p class="mb-4 text-lg text-white">
    Disfruta del sabor clásico de la asafétida con nuestra versión normal, perfecta para aquellos que buscan autenticidad sin gluten. Ideal para restaurantes y cocinas caseras que valoran el sabor tradicional.
  </p>

  <p class="mb-6 text-lg text-white">
    Su principal virtud: <strong class="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">potencia el sabor</strong> de tus platos favoritos, añadiendo esa nota umami que despierta el paladar, ahora disponible en dos versiones: <strong class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">Fuerte</strong> y <strong class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-700">Extra Fuerte</strong>.
  </p>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-yellow-500">Ingredientes:</h3>
    <ul class="space-y-1 list-disc list-inside text-white">
      <li>Goma Arábica</li>
      <li>Asafétida pura</li>
      <li>Harina de arroz (sin gluten)</li>
      <li>Grasa vegetal</li>
    </ul>
  </div>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-yellow-500">Beneficios destacados:</h3>
    <ul class="space-y-3 text-white">
      <li class="flex items-start">
        <span class="mt-1 mr-3 text-xl text-yellow-600">🔥</span>
        <span><strong>Realza sabor sin sal extra:</strong> Aporta notas tipo cebolla o ajo al freírse en aceite, ideal para curris y guisos.</span>
      </li>
      <li class="flex items-start">
        <span class="mt-1 mr-3 text-xl text-yellow-600">🧘</span>
        <span><strong>Mejora digestión:</strong> Tradicionalmente se ha utilizado para apoyar el sistema digestivo, reduciendo la hinchazón y los gases.</span>
      </li>
      <li class="flex items-start">
        <span class="mt-1 mr-3 text-xl text-yellow-600">🌿</span>
        <span><strong>Propiedades naturales:</strong> Rico en compuestos bioactivos, la asafétida se ha valorado por sus posibles efectos antimicrobianos y antiinflamatorios.</span>
      </li>
      <li class="flex items-start">
        <span class="mt-1 mr-3 text-xl text-yellow-600">🧂</span>
        <span><strong>Alternativa al ajo/cebolla:</strong> Úsela en dietas que los evitan; ofrece un sabor similar, sin causar irritación estomacal.</span>
      </li>
    </ul>
  </div>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-yellow-500">Uso recomendado:</h3>
    <p class="text-white">
      Añada una pizca al aceite caliente justo antes de incorporar otras especias. Ideal para preparar el clásico <em>tadka</em> utilizado en dals, sopas y salteados. <strong>Rinde mucho</strong>, gracias a su concentración. Para la versión <strong>Fuerte</strong>, use la mitad de la cantidad recomendada. Para la versión <strong>Extra Fuerte</strong>, use un cuarto de la cantidad recomendada.
    </p>
  </div>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-yellow-500">Versiones disponibles:</h3>
    <p class="text-white">
      <strong class="">Fuerte:</strong> Para aquellos que buscan un sabor intenso y auténtico.<br>
      <strong>Extra Fuerte:</strong> Para los amantes de la asafétida que desean un impacto aún mayor en sus platos.
    </p>
  </div>

  <div class="mb-6">
    <h3 class="mb-2 text-xl font-semibold text-yellow-500">Certificaciones de calidad:</h3>
    <ul class="space-y-1 list-disc list-inside text-white">
      <li><strong>ISO 9001:2015</strong> – Sistema de gestión de calidad internacional.</li>
      <li><strong>FSSAI</strong> – Certificación de seguridad alimentaria emitida por India.</li>
      <li><strong>Spice Board India</strong> – Aval oficial para exportación de especias de calidad.</li>
    </ul>
  </div>

  <div class="p-4 bg-yellow-100 rounded-md border-l-4 border-yellow-500">
    <p class="text-sm text-yellow-900">
      <strong>Nota importante:</strong> Esta versión <span class="font-semibold">NO contiene gluten</span> (harina de arroz). Ideal para dietas sin gluten y para quienes buscan el sabor clásico de la asafétida sin preocupaciones.
    </p>
  </div>
</div>



      </section>
    </header>
    <main class="relative z-10">
      <div class="w-full sm:w-auto">
    <Carousel
      class="relative w-full max-w-xs"
      @init-api="(val) => emblaMainApi = val"
    >
      <CarouselContent>
        <CarouselItem v-for="(_, index) in asafPremiumImages" :key="index">
          <div class="p-1">
            <Card class="bg-black/45 min-h-[80dvh]">
              <CardContent class="flex justify-center items-center p-6 bg-transparent aspect-square">
                <img :src="asafPremiumImages[index]" alt="">
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <Carousel
      class="relative w-full max-w-xs"
      @init-api="(val) => emblaThumbnailApi = val"
    >
      <CarouselContent class="flex gap-1 ml-0">
        <CarouselItem v-for="(_, index) in asafPremiumImages" :key="index" class="pl-0 cursor-pointer basis-1/4" @click="onThumbClick(index)">
          <div class="p-1" :class="index === selectedIndex ? '' : 'opacity-50'">
            <Card class="bg-black/45">
              <CardContent class="flex justify-center items-center p-6 bg-transparent aspect-square">
                <img :src="asafPremiumImages[index]" alt="">
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
    </main>
    <footer class="relative z-10">
      <!-- Your footer content here -->
    </footer>
  </main>
</template>

<script lang="ts" setup>
import imgAsafPremium from '@/assets/img1/asaPremiumFront.png'
import imgAsafNormal from '@/assets/img1/asafoetidaNomalFront.png'
import asafPremiumFront from '@/assets/img1/asaPremiumFront.png'
import asafPremiumBack from '@/assets/img1/asaPremiumLeft.png'
import asafPremiumNutrition from '@/assets/img1/asaPremiumNutrition.png'
import asafPremiumRight from '@/assets/img1/asaPremiumRigh.png'
import asafPremiumZoomed from '@/assets/img1/asaPremiumZoomed.png'
import asafPremiumZoomFront from '@/assets/img1/asaPremiumZoomFront.png'


import { ref } from 'vue';

const imageSelected = ref<string | ''>(imgAsafPremium);

const showInfo = ref(false);

const handleClose = () => {
  showInfo.value = false;
  imageSelected.value = '';
}

const changeImage = (image: string) => {
  imageSelected.value = image;
  showInfo.value = true;
}
const handleChange = (image: string) => {
  showInfo.value = true;
  imageSelected.value = image;
}
import { watchOnce } from '@vueuse/core'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

//Premium Images
const asafPremiumImages = [
  asafPremiumFront,
  asafPremiumBack,
  asafPremiumNutrition,
  asafPremiumRight,
  asafPremiumZoomed,
  asafPremiumZoomFront,
]

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi)
    return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})

</script>

<style scoped></style>
