<template>
	<div class="note-content">
		<h1 class="section-header">Matemaatiline maailmapilt</h1>

		<h2 class="section-header">Hulgad</h2>

		<p>
			Hulgateooria on matemaatika haru, millega üldhariduskoolis reeglina kokku ei puututa.
			Seetõttu alustan kõige lihtsamast, hulga definitsioonist.
		</p>

		<p>
			<strong>Hulk on üksteisest erinevate objektide kogum, mida vaadeldakse ühe tervikuna.</strong>
			On oluline, et iga objekti korral saaks kindlaks määrata, kas ta kuulub antud hulka.
			<strong>Hulk sisaldab üht ja sama elementi maksimaalselt ühe korra.</strong>
		</p>

		<p>
			Näiteks, kõik raamatud ühel riiulil moodustavad hulga. Neid võib olla ligikaudu sada tükki.
			Kõik voodid toas moodustavad samuti hulga. Neid on ehk üks.
			Kõik ühejalgsed piraadid Eesti valitsuses moodustavad hulga. Neid ei ole ühtegi, mistõttu on viimase korral tegu tühja hulgaga.
			Tühja hulga tähiseks on matemaatilistes tekstides <i-tex>\emptyset</i-tex>.
		</p>

		<p>
			Hulgal "õun ja õun" pole mõtet, kui me ei erista neid kaht õuna mingite muude iseärasuste järgi.
			Näiteks oleks korrektne hulk "roheline õun ja punane õun", sest sellega viitame nende värvidele kui omadusele, mille järgi õunu eristada.
		</p>

		<div class="sidenote">
			<p>	
				Tõenäoliselt olete kõik puutunud koolis kokku täisarvude hulgaga.
				Ilmselt see koosneb lõpmatust arvust elementidest.
				Mõnes kontekstis aga pole meie jaoks kõik täisarvud olulised, vaid osutuksid isegi tüliks.
				Näiteks, kui uuritakse täisarvudega jagamisel tekkivaid jääke.
				Arvuga <i-tex>4</i-tex> jagamisel võib tekkida neli erinevat jääki: <i-tex>0,1,2,</i-tex> või <i-tex>3</i-tex>.
				Ülesannetes, kus uuritakse sellist jäägiga jagamist, ahendatakse sageli täisarvude hulk väiksemaks, et sinna kuuluksid ainult <i-tex>0,1,2</i-tex> ja <i-tex>3</i-tex>.
				Arvuga <i-tex>4</i-tex> jagamisel on jääk <i-tex>6</i-tex> samaväärne jäägiga <i-tex>2</i-tex>, need loetakse "võrdseks", ja nii saabki täisarvude hulgast hulk "<i-tex>0,1,2</i-tex> ja <i-tex>3</i-tex>".
			</p>
		</div>

		<p>
			Kui me tahaks konkreetsemalt kirja panna, millised objektid vaadeldavasse hulka kuuluvad, võiks esmalt anda sellele hulgale nime.
			Reeglina tähistatakse hulki suurte ladina tähtedega, näiteks <i-tex>A,B</i-tex> või <i-tex>X</i-tex>.
			Matemaatilises tekstis on need samamoodi muutujad nagu kommide arv <i-tex>k</i-tex> või liivakasti pikkus <i-tex>d</i-tex>.
			Levinud hulkade tähised on reeglina juba kokku lepitud.
			Näiteks võib kindel olla, et kui teemakohast teksti lugedes satud sümboli <i-tex>\mathbb{N}</i-tex> otsa, mõeldakse selle all naturaalarvude hulka.
			<i-tex>\mathbb{Z}</i-tex> tähistab täisarvude hulka, <i-tex>\mathbb{Q}</i-tex> ratsionaalarve ja <i-tex>\mathbb{R}</i-tex> reaalarve.
			Võid märgata ka sümbolit <i-tex>\mathbb{C}</i-tex>, mis tähistab kompleksarvude hulka.
		</p>

		<p>
			Kahe suvalise hulga <i-tex>A</i-tex> ja <i-tex>B</i-tex> võrdlemiseks on erinevaid viise.
		</p>

		<p>
			Näiteks saame võrrelda elementide arvu neis hulkades.
			Hulga elementide arvu nimetatakse selle hulga võimsuseks.
			Näiteks, olgu hulk <i-tex>A := \{ 1,2,3,47 \}</i-tex> ja hulk <i-tex>B := \{ i,a,s,x,h \}</i-tex>.
			Hulga <i-tex>B</i-tex> elemendid võivad tähistada näiteks muutujaid mingis tekstülesandes.
			Siis hulga <i-tex>A</i-tex> võimsus on <i-tex>4</i-tex> ehk <i-tex>|A| =4</i-tex>.
			Hulga <i-tex>B</i-tex> võimsus <i-tex>|B| = 5</i-tex>.
			Siis on hulga <i-tex>A</i-tex> võimsus suurem kui hulga <i-tex>B</i-tex> võimsus ehk hulk <i-tex>A</i-tex> on "suurem" kui hulk <i-tex>B</i-tex>.
			Olgu hulk <i-tex>C:=\{a,s,1,2\}</i-tex>, siis on <i-tex>|C| = 4 = |A|</i-tex>.
			Kui kahe hulga võimsused on võrdsed, siis kutsutakse neid hulki <strong>ekvivalentseteks</strong>.
		</p>

		<p>
			Samuti võime uurida, kas antud hulkadel on ühiseid elemente.
			Hulka, mis koosneb kahe hulga ühistest elementidest, nimetatakse ühisosaks.
			Hulkade <i-tex>A</i-tex> ja <i-tex>C</i-tex> ühisosa tähistatakse <i-tex>A\cap C</i-tex> ning kasutades eelnevaid tähistusi <i-tex>A\cap C = \{ 1,2 \}</i-tex>.
			Kui kahel hulgal on kõik elemendid ühised, siis on need hulgad võrdsed.
		</p>

		<div class="sidenote">
			<p>
				<i>
					Tähist <i-tex>:=</i-tex> kasutatakse võrdusmärgi asemel siis, kui matemaatilises tekstis defineeritakse midagi uut.
					Näiteks hulga <i-tex>A</i-tex> esmasel sättimisel on tavaks kirjutada "<i-tex>A := \{ 1,2,3,47 \}</i-tex>", mitte "<i-tex>A = \{ 1,2,3,47 \}</i-tex>".
					Kui ma soovin kirja panna antud hulkade <i-tex>A</i-tex> ja <i-tex>B</i-tex> ühisosa, siis enam kooloniga võrdusmärki kasutada pole mõtet.
					Nende kahe hulga ühisosa on siis juba väärtustatud, kui sa neile hulkadele konkreetsed väärtused annad.
					Seetõttu võrduses <i-tex>A\cap B=\emptyset</i-tex> piisab tavalisest võrdusmärgist.
				</i>
			</p>
		</div>

		<h2 class="section-header">Lausearvutus</h2>

		<p>
			Seni oleme hulkade elemente fikseerinud ainult neid välja kirjutades.
			Selleks, et kujutada lõpmatu arvu elementidega hulki, näiteks kõigi paarisarvude hulka, peame leidma targema viisi.
		</p> 

		<h2 class="section-header">Tehted hulkadega</h2>

		<p>
			Eelmises lõigus tõin näite hulga ühisosa tehtest.
			Sageli puututakse kokku ka hulkade ühendi, vahe ja sümmeetrilise vahega.
			Kirjeldame neid. 
		</p>

		<p>
			Hulkade <i-tex>A</i-tex> ja <i-tex>B</i-tex> ühendiks nimetatakse hulka <i-tex>A\cup B</i-tex>, mis koosneb kõigist kummagi hulga elementidest.
			Näiteks, kui <i-tex>A=\{ 12,3,45 \}</i-tex> ja <i-tex>B=\{ 12,a,x \}</i-tex>, siis <i-tex>A\cup B=\{12,3,45,a,x\}</i-tex>.
			Element <i-tex>12</i-tex> hulkade ühendis mitu korda ei sisaldu.
		</p>

		<p>
			Hulkade <i-tex>A</i-tex> ja <i-tex>B</i-tex> vaheks nimetatakse hulka, kuhu kuuluvad kõik  <i-tex>A\setminus B</i-tex>
		</p>

	</div>
</template>

<script>
import katex from 'katex';

class InlineTex extends HTMLElement {
	connectedCallback() {
		katex.render(this.innerHTML, this);
	}
}

window.customElements.define('i-tex', InlineTex);

export default {
	name: "MMP"
}
</script>

<style scoped>
.sidenote {
	box-shadow: inset rgba(100, 100, 111, 0.2) 0px 0px 8px 0px;
	border-radius: 5px;
	margin: 2rem 0rem;
	padding: .5rem 1.5rem;
}
</style>