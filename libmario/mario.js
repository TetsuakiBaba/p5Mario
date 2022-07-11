var jatekos;
var talaj_fal;
var grafika;
var money
var gomba;
var loves;
var pont_animacio;
var kilott_ellen_anim;
var mozgasv;
var flg_goal = false;

function setupMario() {
    jatekos = new Jatekos();
    talaj_fal = new Talaj_fal();
    grafika = new Grafika();
    penz = new Penz();
    gomba = new Gomba();
    virag = new Virag();
    ellenseg_gomba = new Ellenseg_gomba();
    ellenseg_kacsa = new Ellenseg_kacsa();
    loves = new Loves();
    pont_animacio = new Pont_animacio();
    kilott_ellen_anim = new Kilott_ellen_anim();
    palya_vege = new Palya_vege();
    mozgasv = new Mozgasv();

    loves.i = "j";
    mozgasv.funkcio();
}

function drawMario() {
    background(92, 136, 252);
    grafika.kfmegjelenites();
    palya_vege.megjelenites();

    if (jatekos.gomba_ == 0) {
        gomba.megjelenites();
    }

    if (jatekos.gomba_ > 0 || virag.lathato == true) {
        virag.megjelenites();
    }

    if (virag.felvett_virag == true) {
        loves.megjelenites();
    }

    if (jatekos.halal == false && palya_vege.vx - jatekos.x > 5) {
        jatekos.megjelenites();
    }

    talaj_fal.megjelenites();
    penz.megjelenites();
    ellenseg_gomba.megjelenites();
    ellenseg_kacsa.megjelenites();
    pont_animacio.megjelenites();
    kilott_ellen_anim.megjelenites();
    jatekos.meghal();
    mozgasv.funkcio();
}

function goLeft() {
    if (palya_vege.mt == false) {
        if (jatekos.guggolas == false) {
            jatekos.balra = true;
            loves.i = "b";
        }
    }
}

function goRight() {
    if (palya_vege.mt == false) {
        if (jatekos.guggolas == false) {
            jatekos.jobbra = true;
            loves.i = "j";
        }
    }
}

function goJump() {
    // jump
    if (palya_vege.mt == false) {
        if (jatekos.zuhanas == false) {
            jatekos.ugras = true;
        }
    }
}

function goDown() {
    if (palya_vege.mt == false) {
        // crouch
        jatekos.guggolas = true;

    }
}
function goFire() {
    // Fire ball!!!!
    loves.e = true;
}

function stopLeft() {
    jatekos.balra = false;
}
function stopRight() {
    jatekos.jobbra = false;
}
function stopDown() {
    jatekos.guggolas = false;
}
function stopFire() {
    loves.e = false;
}

function Ellenseg_gomba() {

    this.x = [];
    this.y = [];
    this.em = [];
    this.zuhanas = [];
    this.balra = [];
    this.jobbra = [];
    this.tiltasb = [];
    this.tiltasj = [];
    this.indul = [];
    this.halott = [];
    this.halotti = [];
    this.hx = [];
    this.hy = [];
    this.sebesseg_v2 = [];
    this.pa = false;
    this.pax = 0;
    this.pay = 0;
    this.pai = 0;

    this.gba = -1;

    this.m1 = 40;
    this.m2 = 39;

    this.zsebesseg = 5;

    this.millis_ = 0;

    this.ki = true;
    this.kep = [];
    this.kep[1] = loadImage("libmario/images/ellenseg_1_bal.png");
    this.kep[2] = loadImage("libmario/images/ellenseg_1_jobb.png");
    this.kep[3] = loadImage("libmario/images/ellenseg_1_halott.png");
    this.kep[0] = this.kep[1];

    this.x[1] = 968;
    this.y[1] = 532;
    this.em[1] = 0;
    this.zuhanas[1] = true;
    this.balra[1] = true;
    this.jobbra[1] = false;
    this.tiltasb[1] = false;
    this.tiltasj[1] = false;
    this.indul[1] = false;
    this.halott[1] = false;
    this.halotti[1] = 0;

    this.x[2] = 2007;
    this.y[2] = 532;
    this.em[2] = 0;
    this.zuhanas[2] = true;
    this.balra[2] = true;
    this.jobbra[2] = false;
    this.tiltasb[2] = false;
    this.tiltasj[2] = false;
    this.indul[2] = false;
    this.halott[2] = false;
    this.halotti[2] = 0;

    this.x[3] = 2471;
    this.y[3] = 532;
    this.em[3] = 0;
    this.zuhanas[3] = true;
    this.balra[3] = true;
    this.jobbra[3] = false;
    this.tiltasb[3] = false;
    this.tiltasj[3] = false;
    this.indul[3] = false;
    this.halott[3] = false;
    this.halotti[3] = 0;

    this.x[4] = 2410;
    this.y[4] = 532;
    this.em[4] = 0;
    this.zuhanas[4] = true;
    this.balra[4] = true;
    this.jobbra[4] = false;
    this.tiltasb[4] = false;
    this.tiltasj[4] = false;
    this.indul[4] = false;
    this.halott[4] = false;
    this.halotti[4] = 0;

    this.x[5] = 3560;
    this.y[5] = 175;
    this.em[5] = 0;
    this.zuhanas[5] = true;
    this.balra[5] = true;
    this.jobbra[5] = false;
    this.tiltasb[5] = false;
    this.tiltasj[5] = false;
    this.indul[5] = false;
    this.halott[5] = false;
    this.halotti[5] = 0;

    this.x[6] = 3620;
    this.y[6] = 175;
    this.em[6] = 0;
    this.zuhanas[6] = true;
    this.balra[6] = true;
    this.jobbra[6] = false;
    this.tiltasb[6] = false;
    this.tiltasj[6] = false;
    this.indul[6] = false;
    this.halott[6] = false;
    this.halotti[6] = 0;

    this.x[7] = 4327;
    this.y[7] = 532;
    this.em[7] = 0;
    this.zuhanas[7] = true;
    this.balra[7] = true;
    this.jobbra[7] = false;
    this.tiltasb[7] = false;
    this.tiltasj[7] = false;
    this.indul[7] = false;
    this.halott[7] = false;
    this.halotti[7] = 0;

    this.x[8] = 4400;
    this.y[8] = 532;
    this.em[8] = 0;
    this.zuhanas[8] = true;
    this.balra[8] = true;
    this.jobbra[8] = false;
    this.tiltasb[8] = false;
    this.tiltasj[8] = false;
    this.indul[8] = false;
    this.halott[8] = false;
    this.halotti[8] = 0;

    this.x[9] = 5066;
    this.y[9] = 532;
    this.em[9] = 0;
    this.zuhanas[9] = true;
    this.balra[9] = true;
    this.jobbra[9] = false;
    this.tiltasb[9] = false;
    this.tiltasj[9] = false;
    this.indul[9] = false;
    this.halott[9] = false;
    this.halotti[9] = 0;

    this.x[10] = 5130;
    this.y[10] = 532;
    this.em[10] = 0;
    this.zuhanas[10] = true;
    this.balra[10] = true;
    this.jobbra[10] = false;
    this.tiltasb[10] = false;
    this.tiltasj[10] = false;
    this.indul[10] = false;
    this.halott[10] = false;
    this.halotti[10] = 0;

    this.x[11] = 5599;
    this.x[11] = 5479;
    this.y[11] = 532;
    this.em[11] = 0;
    this.zuhanas[11] = true;
    this.balra[11] = true;
    this.jobbra[11] = false;
    this.tiltasb[11] = false;
    this.tiltasj[11] = false;
    this.indul[11] = false;
    this.halott[11] = false;
    this.halotti[11] = 0;

    this.x[12] = 5533;
    this.y[12] = 532;
    this.em[12] = 0;
    this.zuhanas[12] = true;
    this.balra[12] = true;
    this.jobbra[12] = false;
    this.tiltasb[12] = false;
    this.tiltasj[12] = false;
    this.indul[12] = false;
    this.halott[12] = false;
    this.halotti[12] = 0;

    this.x[13] = 5700;
    this.y[13] = 532;
    this.em[13] = 0;
    this.zuhanas[13] = true;
    this.balra[13] = true;
    this.jobbra[13] = false;
    this.tiltasb[13] = false;
    this.tiltasj[13] = false;
    this.indul[13] = false;
    this.halott[13] = false;
    this.halotti[13] = 0;

    this.x[14] = 5761;
    this.y[14] = 532;
    this.em[14] = 0;
    this.zuhanas[14] = true;
    this.balra[14] = true;
    this.jobbra[14] = false;
    this.tiltasb[14] = false;
    this.tiltasj[14] = false;
    this.indul[14] = false;
    this.halott[14] = false;
    this.halotti[14] = 0;

    this.x[15] = 7743;
    this.y[15] = 532;
    this.em[15] = 0;
    this.zuhanas[15] = true;
    this.balra[15] = true;
    this.jobbra[15] = false;
    this.tiltasb[15] = false;
    this.tiltasj[15] = false;
    this.indul[15] = false;
    this.halott[15] = false;
    this.halotti[15] = 0;

    this.x[16] = 7798;
    this.y[16] = 532;
    this.em[16] = 0;
    this.zuhanas[16] = true;
    this.balra[16] = true;
    this.jobbra[16] = false;
    this.tiltasb[16] = false;
    this.tiltasj[16] = false;
    this.indul[16] = false;
    this.halott[16] = false;
    this.halotti[16] = 0;

    this.megjelenites = function () {

        if (this.millis_ <= millis()) {
            this.millis_ = millis() + 150;
            if (this.ki == true) {
                this.ki = false;
                this.kep[0] = this.kep[1];
            } else {
                this.ki = true;
                this.kep[0] = this.kep[2];
            }
        }


        for (var i = 1; i <= this.x.length - 1; i++) {
            if (abs(this.x[i] - jatekos.x) < 1200 && abs(this.y[i] - jatekos.y) < 800) {
                let agbo = this.x[i] - this.m1 / 2;
                let agjo = this.x[i] + this.m1 / 2;
                let agfo = this.y[i] - this.m2 / 2;
                let agao = this.y[i] + this.m2 / 2;


                for (var j = 1; j <= this.x.length - 1; j++) {

                    let ogbo = this.x[j] - this.m1 / 2;
                    let ogjo = this.x[j] + this.m1 / 2;
                    let ogfo = this.y[j] - this.m2 / 2;
                    let ogao = this.y[j] + this.m2 / 2;

                    if (j != i) {
                        if (agbo - this.sebesseg_v2[i] < ogjo + this.sebesseg_v2[i] && agjo + this.sebesseg_v2[i] > ogbo - this.sebesseg_v2[i]) {
                            if (this.indul[i] == true && this.halott[i] == false && this.halott[j] == false) {
                                if (this.jobbra[i] == true) {
                                    this.tiltasj[i] = true;
                                } else {
                                    this.tiltasb[i] = true
                                }
                            }
                        }
                    }

                }

                if (this.indul[i] == true) {
                    if (this.tiltasj[i] == true) {
                        this.balra[i] = true;
                        this.jobbra[i] = false;
                        this.tiltasj[i] = false;
                    }

                    if (this.tiltasb[i] == true) {
                        this.balra[i] = false;
                        this.jobbra[i] = true;
                        this.tiltasb[i] = false
                    }

                    if (this.balra[i] == true && this.tiltasb[i] == false && this.halott[i] == false) {
                        this.x[i] -= this.sebesseg_v2[i];
                    }

                    if (this.jobbra[i] == true && this.tiltasj[i] == false && this.halott[i] == false) {
                        this.x[i] += this.sebesseg_v2[i];

                    }

                    if (this.y[i] + this.zsebesseg + this.m2 / 2 <= this.em[i]) {
                        this.y[i] += this.zsebesseg
                        this.zuhanas[i] = true;
                    }

                    if (this.em[i] - this.y[i] - this.m2 / 2 <= this.zsebesseg) {
                        this.y[i] = this.em[i] - this.m2 / 2
                        this.zuhanas[i] = false;
                    }
                }

                if (agbo < jatekos.x + jatekos.m1 / 2 && agjo > jatekos.x - jatekos.m1 / 2) {
                    if (jatekos.y < agfo && jatekos.y + jatekos.m2 / 2 > agfo && jatekos.ugras == false) {
                        if (this.halott[i] == false) {
                            jatekos.ugras = true;
                            jatekos.lmugras = 200;
                            this.halott[i] = true;
                            this.hx[i] = this.x[i];
                            this.hy[i] = this.y[i] + 13;
                            this.halotti[i] = millis() + 1000;
                            pont_animacio.ai++;
                            pont_animacio.x[pont_animacio.ai] = this.x[i];
                            pont_animacio.y[pont_animacio.ai] = this.y[i];
                            pont_animacio.ye[pont_animacio.ai] = this.y[i];
                            pont_animacio.e[pont_animacio.ai] = 100;
                            pont_animacio.l[pont_animacio.ai] = true;
                            grafika.pont += pont_animacio.e[pont_animacio.ai];
                        }
                    }
                }

                if (this.halott[i] == false) {
                    this.m1 = 40;
                    this.m2 = 39;
                    image(this.kep[0], this.x[i], this.y[i], this.m1, this.m2);
                } else {
                    this.indul[i] = false;
                    if (this.halotti[i] > millis()) {
                        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.x >= 300) {
                            this.hx[i] -= 4;
                        }
                        image(this.kep[3], this.hx[i], this.hy[i], this.m1, 15);
                    }
                }
            }
        }




    }
}

function Ellenseg_gomba() {

    this.x = [];
    this.y = [];
    this.em = [];
    this.zuhanas = [];
    this.balra = [];
    this.jobbra = [];
    this.tiltasb = [];
    this.tiltasj = [];
    this.indul = [];
    this.halott = [];
    this.halotti = [];
    this.hx = [];
    this.hy = [];
    this.sebesseg_v2 = [];
    this.pa = false;
    this.pax = 0;
    this.pay = 0;
    this.pai = 0;

    this.gba = -1;

    this.m1 = 40;
    this.m2 = 39;

    this.zsebesseg = 5;

    this.millis_ = 0;

    this.ki = true;
    this.kep = [];
    this.kep[1] = loadImage("libmario/images/ellenseg_1_bal.png");
    this.kep[2] = loadImage("libmario/images/ellenseg_1_jobb.png");
    this.kep[3] = loadImage("libmario/images/ellenseg_1_halott.png");
    this.kep[0] = this.kep[1];

    this.x[1] = 968;
    this.y[1] = 532;
    this.em[1] = 0;
    this.zuhanas[1] = true;
    this.balra[1] = true;
    this.jobbra[1] = false;
    this.tiltasb[1] = false;
    this.tiltasj[1] = false;
    this.indul[1] = false;
    this.halott[1] = false;
    this.halotti[1] = 0;

    this.x[2] = 2007;
    this.y[2] = 532;
    this.em[2] = 0;
    this.zuhanas[2] = true;
    this.balra[2] = true;
    this.jobbra[2] = false;
    this.tiltasb[2] = false;
    this.tiltasj[2] = false;
    this.indul[2] = false;
    this.halott[2] = false;
    this.halotti[2] = 0;

    this.x[3] = 2471;
    this.y[3] = 532;
    this.em[3] = 0;
    this.zuhanas[3] = true;
    this.balra[3] = true;
    this.jobbra[3] = false;
    this.tiltasb[3] = false;
    this.tiltasj[3] = false;
    this.indul[3] = false;
    this.halott[3] = false;
    this.halotti[3] = 0;

    this.x[4] = 2410;
    this.y[4] = 532;
    this.em[4] = 0;
    this.zuhanas[4] = true;
    this.balra[4] = true;
    this.jobbra[4] = false;
    this.tiltasb[4] = false;
    this.tiltasj[4] = false;
    this.indul[4] = false;
    this.halott[4] = false;
    this.halotti[4] = 0;

    this.x[5] = 3560;
    this.y[5] = 175;
    this.em[5] = 0;
    this.zuhanas[5] = true;
    this.balra[5] = true;
    this.jobbra[5] = false;
    this.tiltasb[5] = false;
    this.tiltasj[5] = false;
    this.indul[5] = false;
    this.halott[5] = false;
    this.halotti[5] = 0;

    this.x[6] = 3620;
    this.y[6] = 175;
    this.em[6] = 0;
    this.zuhanas[6] = true;
    this.balra[6] = true;
    this.jobbra[6] = false;
    this.tiltasb[6] = false;
    this.tiltasj[6] = false;
    this.indul[6] = false;
    this.halott[6] = false;
    this.halotti[6] = 0;

    this.x[7] = 4327;
    this.y[7] = 532;
    this.em[7] = 0;
    this.zuhanas[7] = true;
    this.balra[7] = true;
    this.jobbra[7] = false;
    this.tiltasb[7] = false;
    this.tiltasj[7] = false;
    this.indul[7] = false;
    this.halott[7] = false;
    this.halotti[7] = 0;

    this.x[8] = 4400;
    this.y[8] = 532;
    this.em[8] = 0;
    this.zuhanas[8] = true;
    this.balra[8] = true;
    this.jobbra[8] = false;
    this.tiltasb[8] = false;
    this.tiltasj[8] = false;
    this.indul[8] = false;
    this.halott[8] = false;
    this.halotti[8] = 0;

    this.x[9] = 5066;
    this.y[9] = 532;
    this.em[9] = 0;
    this.zuhanas[9] = true;
    this.balra[9] = true;
    this.jobbra[9] = false;
    this.tiltasb[9] = false;
    this.tiltasj[9] = false;
    this.indul[9] = false;
    this.halott[9] = false;
    this.halotti[9] = 0;

    this.x[10] = 5130;
    this.y[10] = 532;
    this.em[10] = 0;
    this.zuhanas[10] = true;
    this.balra[10] = true;
    this.jobbra[10] = false;
    this.tiltasb[10] = false;
    this.tiltasj[10] = false;
    this.indul[10] = false;
    this.halott[10] = false;
    this.halotti[10] = 0;

    this.x[11] = 5599;
    this.x[11] = 5479;
    this.y[11] = 532;
    this.em[11] = 0;
    this.zuhanas[11] = true;
    this.balra[11] = true;
    this.jobbra[11] = false;
    this.tiltasb[11] = false;
    this.tiltasj[11] = false;
    this.indul[11] = false;
    this.halott[11] = false;
    this.halotti[11] = 0;

    this.x[12] = 5533;
    this.y[12] = 532;
    this.em[12] = 0;
    this.zuhanas[12] = true;
    this.balra[12] = true;
    this.jobbra[12] = false;
    this.tiltasb[12] = false;
    this.tiltasj[12] = false;
    this.indul[12] = false;
    this.halott[12] = false;
    this.halotti[12] = 0;

    this.x[13] = 5700;
    this.y[13] = 532;
    this.em[13] = 0;
    this.zuhanas[13] = true;
    this.balra[13] = true;
    this.jobbra[13] = false;
    this.tiltasb[13] = false;
    this.tiltasj[13] = false;
    this.indul[13] = false;
    this.halott[13] = false;
    this.halotti[13] = 0;

    this.x[14] = 5761;
    this.y[14] = 532;
    this.em[14] = 0;
    this.zuhanas[14] = true;
    this.balra[14] = true;
    this.jobbra[14] = false;
    this.tiltasb[14] = false;
    this.tiltasj[14] = false;
    this.indul[14] = false;
    this.halott[14] = false;
    this.halotti[14] = 0;

    this.x[15] = 7743;
    this.y[15] = 532;
    this.em[15] = 0;
    this.zuhanas[15] = true;
    this.balra[15] = true;
    this.jobbra[15] = false;
    this.tiltasb[15] = false;
    this.tiltasj[15] = false;
    this.indul[15] = false;
    this.halott[15] = false;
    this.halotti[15] = 0;

    this.x[16] = 7798;
    this.y[16] = 532;
    this.em[16] = 0;
    this.zuhanas[16] = true;
    this.balra[16] = true;
    this.jobbra[16] = false;
    this.tiltasb[16] = false;
    this.tiltasj[16] = false;
    this.indul[16] = false;
    this.halott[16] = false;
    this.halotti[16] = 0;

    this.megjelenites = function () {

        if (this.millis_ <= millis()) {
            this.millis_ = millis() + 150;
            if (this.ki == true) {
                this.ki = false;
                this.kep[0] = this.kep[1];
            } else {
                this.ki = true;
                this.kep[0] = this.kep[2];
            }
        }


        for (var i = 1; i <= this.x.length - 1; i++) {
            if (abs(this.x[i] - jatekos.x) < 1200 && abs(this.y[i] - jatekos.y) < 800) {
                let agbo = this.x[i] - this.m1 / 2;
                let agjo = this.x[i] + this.m1 / 2;
                let agfo = this.y[i] - this.m2 / 2;
                let agao = this.y[i] + this.m2 / 2;


                for (var j = 1; j <= this.x.length - 1; j++) {

                    let ogbo = this.x[j] - this.m1 / 2;
                    let ogjo = this.x[j] + this.m1 / 2;
                    let ogfo = this.y[j] - this.m2 / 2;
                    let ogao = this.y[j] + this.m2 / 2;

                    if (j != i) {
                        if (agbo - this.sebesseg_v2[i] < ogjo + this.sebesseg_v2[i] && agjo + this.sebesseg_v2[i] > ogbo - this.sebesseg_v2[i]) {
                            if (this.indul[i] == true && this.halott[i] == false && this.halott[j] == false) {
                                if (this.jobbra[i] == true) {
                                    this.tiltasj[i] = true;
                                } else {
                                    this.tiltasb[i] = true
                                }
                            }
                        }
                    }

                }

                if (this.indul[i] == true) {
                    if (this.tiltasj[i] == true) {
                        this.balra[i] = true;
                        this.jobbra[i] = false;
                        this.tiltasj[i] = false;
                    }

                    if (this.tiltasb[i] == true) {
                        this.balra[i] = false;
                        this.jobbra[i] = true;
                        this.tiltasb[i] = false
                    }

                    if (this.balra[i] == true && this.tiltasb[i] == false && this.halott[i] == false) {
                        this.x[i] -= this.sebesseg_v2[i];
                    }

                    if (this.jobbra[i] == true && this.tiltasj[i] == false && this.halott[i] == false) {
                        this.x[i] += this.sebesseg_v2[i];

                    }

                    if (this.y[i] + this.zsebesseg + this.m2 / 2 <= this.em[i]) {
                        this.y[i] += this.zsebesseg
                        this.zuhanas[i] = true;
                    }

                    if (this.em[i] - this.y[i] - this.m2 / 2 <= this.zsebesseg) {
                        this.y[i] = this.em[i] - this.m2 / 2
                        this.zuhanas[i] = false;
                    }
                }

                if (agbo < jatekos.x + jatekos.m1 / 2 && agjo > jatekos.x - jatekos.m1 / 2) {
                    if (jatekos.y < agfo && jatekos.y + jatekos.m2 / 2 > agfo && jatekos.ugras == false) {
                        if (this.halott[i] == false) {
                            jatekos.ugras = true;
                            jatekos.lmugras = 200;
                            this.halott[i] = true;
                            this.hx[i] = this.x[i];
                            this.hy[i] = this.y[i] + 13;
                            this.halotti[i] = millis() + 1000;
                            pont_animacio.ai++;
                            pont_animacio.x[pont_animacio.ai] = this.x[i];
                            pont_animacio.y[pont_animacio.ai] = this.y[i];
                            pont_animacio.ye[pont_animacio.ai] = this.y[i];
                            pont_animacio.e[pont_animacio.ai] = 100;
                            pont_animacio.l[pont_animacio.ai] = true;
                            grafika.pont += pont_animacio.e[pont_animacio.ai];
                        }
                    }
                }

                if (this.halott[i] == false) {
                    this.m1 = 40;
                    this.m2 = 39;
                    image(this.kep[0], this.x[i], this.y[i], this.m1, this.m2);
                } else {
                    this.indul[i] = false;
                    if (this.halotti[i] > millis()) {
                        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.x >= 300) {
                            this.hx[i] -= 4;
                        }
                        image(this.kep[3], this.hx[i], this.hy[i], this.m1, 15);
                    }
                }
            }
        }




    }
}

function Ellenseg_kacsa() {

    this.x = [];
    this.y = [];
    this.em = [];
    this.zuhanas = [];
    this.balra = [];
    this.jobbra = [];
    this.tiltasb = [];
    this.tiltasj = [];
    this.indul = [];
    this.halott = [];
    this.halotti = [];
    this.ue = [];
    this.uei = [];
    this.vh = [];
    this.li = [];
    this.vhms = [];
    this.vhmi = [];
    this.kv = [];
    this.m1 = 39;
    this.m2 = 57;
    this.sebesseg_v2 = [];

    this.msebesseg = 1;
    this.zsebesseg = 5;

    this.millis_ = 0;

    this.ki = true;
    this.kep = [];
    this.kep[1] = loadImage("libmario/images/kacsa_teknos_1.png");
    this.kep[2] = loadImage("libmario/images/kacsa_teknos_2.png");
    this.kep[3] = loadImage("libmario/images/kacsa_teknos_3.png");
    this.kep[4] = loadImage("libmario/images/kacsa_teknos_4.png");
    this.kep[5] = loadImage("libmario/images/kacsa_teknos_5.png");
    this.kep[0] = this.kep[1];

    this.x[1] = 4770;
    this.y[1] = 520;
    this.em[1] = 0;
    this.zuhanas[1] = true;
    this.balra[1] = true;
    this.jobbra[1] = false;
    this.tiltasb[1] = false;
    this.tiltasj[1] = false;
    this.indul[1] = false;
    this.halott[1] = false;
    this.halotti[1] = 0;
    this.ue[1] = false;
    this.uei[1] = 0;
    this.vh[1] = false;
    this.vhms[1] = 10;
    this.vhmi[1] = "s"
    this.kv[1] = false;

    this.megjelenites = function () {

        for (var i = 1; i <= this.x.length - 1; i++) {
            if (this.kv[i] == false) {
                if (this.millis_ <= millis()) {
                    this.millis_ = millis() + 150;
                    if (this.ki == true) {
                        this.ki = false;
                        if (this.balra[i] == true) {
                            this.kep[0] = this.kep[1];
                        }
                        if (this.jobbra[i] == true) {
                            this.kep[0] = this.kep[4];
                        }
                    } else {
                        this.ki = true;
                        if (this.balra[i] == true) {
                            this.kep[0] = this.kep[2];
                        }
                        if (this.jobbra[i] == true) {
                            this.kep[0] = this.kep[5];
                        }
                    }
                }


                if (abs(this.x[i] - jatekos.x) < 3000 && abs(this.y[i] - jatekos.y) < 800) {
                    let akbo = this.x[i] - this.m1 / 2;
                    let akjo = this.x[i] + this.m1 / 2;
                    let akfo = this.y[i] - this.m2 / 2;
                    let akao = this.y[i] + this.m2 / 2;

                    for (var j = 1; j <= ellenseg_gomba.x.length - 1; j++) {
                        if (abs(ellenseg_gomba.x[j] - this.x[i]) < 20 && abs(ellenseg_gomba.y[j] - this.y[i]) < 20) {
                            if (this.vh[i] == true && ellenseg_gomba.halott[j] == false) {

                                pont_animacio.ai++;
                                pont_animacio.x[pont_animacio.ai] = this.x[i];
                                pont_animacio.y[pont_animacio.ai] = this.y[i];
                                pont_animacio.ye[pont_animacio.ai] = this.y[i];
                                pont_animacio.e[pont_animacio.ai] = 100;
                                pont_animacio.l[pont_animacio.ai] = true;
                                grafika.pont += pont_animacio.e[pont_animacio.ai];

                                kilott_ellen_anim.i++;
                                kilott_ellen_anim.xe[kilott_ellen_anim.i] = ellenseg_gomba.x[j];
                                kilott_ellen_anim.ye[kilott_ellen_anim.i] = ellenseg_gomba.y[j];
                                kilott_ellen_anim.l[kilott_ellen_anim.i] = true;
                                kilott_ellen_anim.kg[kilott_ellen_anim.i] = "g";
                                kilott_ellen_anim.t[kilott_ellen_anim.i] = 0;
                                ellenseg_gomba.halott[j] = true;
                                ellenseg_gomba.halotti[j] = millis() - 1;

                                if (this.x[i] < ellenseg_gomba.x[j]) {
                                    kilott_ellen_anim.sz[kilott_ellen_anim.i] = -60;
                                } else {
                                    kilott_ellen_anim.sz[kilott_ellen_anim.i] = 240;
                                }
                            }
                        }
                    }

                    for (var j = 1; j <= this.x.length - 1; j++) {

                        let okbo = this.x[j] - this.m1 / 2;
                        let okjo = this.x[j] + this.m1 / 2;
                        let okfo = this.y[j] - this.m2 / 2;
                        let okao = this.y[j] + this.m2 / 2;

                        if (j != i) {
                            if (akbo - this.msebesseg < okjo + this.sebesseg_v2[i] && akjo + this.msebesseg > okbo - this.sebesseg_v2[i]) {
                                if (this.jobbra[i] == true) {
                                    this.tiltasj[i] = true;
                                } else {
                                    this.tiltasb[i] = true
                                }
                            }
                        }

                    }

                    if (this.indul[i] == true) {
                        if (this.tiltasj[i] == true) {
                            this.balra[i] = true;
                            this.jobbra[i] = false;
                            this.tiltasj[i] = false;
                        }

                        if (this.tiltasb[i] == true) {
                            this.balra[i] = false;
                            this.jobbra[i] = true;
                            this.tiltasb[i] = false
                        }

                        if (this.balra[i] == true && this.tiltasb[i] == false && this.vh[i] == false && this.halott[i] == false) {
                            this.x[i] -= this.sebesseg_v2[i];
                        }

                        if (this.jobbra[i] == true && this.tiltasj[i] == false && this.vh[i] == false && this.halott[i] == false) {
                            this.x[i] += this.sebesseg_v2[i];
                        }

                        if (this.y[i] + this.zsebesseg + this.m2 / 2 <= this.em[i]) {
                            this.y[i] += this.zsebesseg
                            this.zuhanas[i] = true;
                        }

                        if (this.em[i] - this.y[i] - this.m2 / 2 <= this.zsebesseg) {
                            this.y[i] = this.em[i] - this.m2 / 2
                            this.zuhanas[i] = false;
                        }
                    }

                    if (akbo < jatekos.x + jatekos.m1 / 2 && akjo > jatekos.x - jatekos.m1 / 2) {

                        if (abs(jatekos.y - this.y[i]) < 20 && this.uei[i] == 1) {
                            this.vh[1] = true;
                            this.uei[i] = 2;
                        }

                        if (jatekos.y < akfo && jatekos.y + jatekos.m2 / 2 > akfo && jatekos.ugras == false) {

                            if (this.uei[i] > 1) {
                                this.vhmi[i] = "s";
                                this.vh[i] = false
                                this.uei[i] = 0;
                                this.y[i] -= 11
                            }

                            if (this.halott[i] == false || this.ue[1] == false) {
                                jatekos.ugras = true;
                                jatekos.lmugras = 200;
                                this.halott[i] = true;
                                if (this.uei[i] == 0) {
                                    this.y[i] += 11;
                                }
                                this.halotti[i] = millis() + 4000;

                                if (this.uei[i] == 0) {
                                    pont_animacio.ai++;
                                    pont_animacio.x[pont_animacio.ai] = this.x[i];
                                    pont_animacio.y[pont_animacio.ai] = this.y[i];
                                    pont_animacio.ye[pont_animacio.ai] = this.y[i];
                                    pont_animacio.e[pont_animacio.ai] = 100;
                                    pont_animacio.l[pont_animacio.ai] = true;
                                    grafika.pont += pont_animacio.e[pont_animacio.ai];
                                }

                                this.uei[i]++;

                            }
                        }
                    }

                    if (this.halott[i] == false) {
                        this.ue[1] = false;
                        this.m1 = 39;
                        this.m2 = 57;
                        image(this.kep[0], this.x[i], this.y[i], this.m1, this.m2);
                    } else {
                        this.m1 = 39;
                        this.m2 = 34;
                        this.indul[i] = false;
                        if (this.uei[i] > 1) {
                            this.indul[i] = true;
                            this.vh[1] = true;

                            if (this.vhmi[i] == "s") {
                                pont_animacio.ai++;
                                pont_animacio.x[pont_animacio.ai] = this.x[i];
                                pont_animacio.y[pont_animacio.ai] = this.y[i];
                                pont_animacio.ye[pont_animacio.ai] = this.y[i];
                                pont_animacio.e[pont_animacio.ai] = 400;
                                pont_animacio.l[pont_animacio.ai] = true;
                                grafika.pont += pont_animacio.e[pont_animacio.ai];
                                if (jatekos.x < this.x[i]) {
                                    this.vhmi[i] = "b";
                                } else {
                                    this.vhmi[i] = "j"
                                }
                            }

                            if (this.vhmi[i] == "b") {
                                this.x[i] += this.vhms[i] + ellenseg_kacsa.sebesseg_v2[i];
                            }
                            if (this.vhmi[i] == "j") {
                                this.x[i] -= this.vhms[i] + ellenseg_kacsa.sebesseg_v2[i];
                            }

                        }
                        if (this.halotti[i] > millis() || this.vh[i] == true) {
                            image(this.kep[3], this.x[i], this.y[i], this.m1, this.m2);
                        } else {
                            this.indul[i] = true;
                            if (this.vh[i] == false) {
                                this.halott[i] = false;
                            }
                            this.y[i] -= 21;
                            this.ue[i] = true;
                            this.uei[i] = 0;

                            if (this.balra[i] == true) {
                                this.kep[0] = this.kep[4];
                                this.balra[i] = false;
                                this.jobbra[i] = true;
                                this.tiltasj[i] = false;
                                this.tiltasb[i] = false;
                            } else {
                                this.kep[0] = this.kep[1];
                                this.balra[i] = true;
                                this.jobbra[i] = false;
                                this.tiltasj[i] = false;
                                this.tiltasb[i] = false;
                            }
                        }
                    }
                }
            }
        }

    }
}


function Gomba() {

    this.x = 219;
    this.y = 269;
    this.m1 = 43;
    this.m2 = 43;

    this.balra = false;
    this.jobbra = true;

    this.zuhanas = false;

    this.msebesseg = 3;
    this.zsebesseg = 5;
    this.usebesseg = 5;
    this.ugrasi = 0;
    this.kep = loadImage("libmario/images/gomba.png");

    this.tiltasb = false;
    this.tiltasj = false;
    this.lathato = false;
    this.animation = false;
    this.gba = -1;
    this.gb = 0;

    this.sebesseg_v2 = 0;

    this.megjelenites = function () {

        if (this.gba != talaj_fal.kerd && talaj_fal.kerd != 0 && (talaj_fal.kerd == 1006 || talaj_fal.kerd == 1008)) {
            this.gba = talaj_fal.kerd;
            this.tiltasb = false;
            this.tiltasj = false;
            this.lathato = false;
            this.animation = false;
            this.gb = talaj_fal.kerd
        }

        if (talaj_fal.kerd == 1003 || talaj_fal.kerd == 1006 || talaj_fal.kerd == 1008) {
            this.gb = talaj_fal.kerd;
            if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
                if (this.animation == false) {
                    this.animation = true
                    this.x = talaj_fal.x[talaj_fal.kerd];
                    this.y = talaj_fal.y[talaj_fal.kerd] - 15;
                }
            }
        }

        if (this.animation == true) {
            image(this.kep, this.x, this.y, this.m1, this.m2);

            if (this.y >= talaj_fal.y[this.gb] - talaj_fal.m2[this.gb]) {
                this.y--;
            } else {

                this.animation = false;
                talaj_fal.kerd = 0;
                this.lathato = true;

            }
        }

        if (abs(this.x - jatekos.x) < 30 && abs(this.y - jatekos.y) < 30 && this.lathato == true) {
            this.lathato = false;
            jatekos.gomba_++;
            pont_animacio.ai++;
            pont_animacio.x[pont_animacio.ai] = this.x;
            pont_animacio.y[pont_animacio.ai] = this.y;
            pont_animacio.ye[pont_animacio.ai] = this.y;
            pont_animacio.e[pont_animacio.ai] = 1000;
            pont_animacio.l[pont_animacio.ai] = true;
            grafika.pont += pont_animacio.e[pont_animacio.ai];
        }

        if (this.lathato == true) {
            if (this.tiltasj == true) {
                this.balra = true;
                this.jobbra = false;
                this.tiltasj = false;
            }

            if (this.tiltasb == true) {
                this.balra = false;
                this.jobbra = true;
                this.tiltasb = false;
            }

            if (this.balra == true && this.tiltasb == false) {
                this.x -= this.sebesseg_v2;
            }

            if (this.jobbra == true && this.tiltasj == false) {
                this.x += this.sebesseg_v2;
            }

            if (this.y + this.zsebesseg + this.m2 / 2 <= this.em) {
                this.y += this.zsebesseg
                this.zuhanas = true;
                this.msebesseg = this.sebesseg_v2;
            }

            if (this.em - this.y - this.m2 / 2 <= this.zsebesseg) {
                this.y = this.em - this.m2 / 2
                this.zuhanas = false;
                this.msebesseg = this.sebesseg_v2;
            }

            image(this.kep, this.x, this.y, this.m1, this.m2);

        }

    }
}

function Grafika() {

    this.p_kf = loadImage("libmario/images/kf.png");
    this.p_kozf = loadImage("libmario/images/kozf.png");
    this.p_nf = loadImage("libmario/images/nf.png");
    this.p_kdb = loadImage("libmario/images/kdb.png");
    this.p_ndb = loadImage("libmario/images/ndb.png");
    this.p_kb = loadImage("libmario/images/kb.png");
    this.p_kozb = loadImage("libmario/images/kozb.png");
    this.p_nb = loadImage("libmario/images/nb.png");
    this.penz = loadImage("libmario/images/money_1.png");

    this.pont = 0;
    this.pontx = 80;
    this.erem = 0;
    this.eremx = 270;
    this.vilag = "1-1"
    this.vilagx = 450;
    this.ido = 400;
    this.idox = 590
    this.millis = 0;

    this.kfx = [];
    this.kfy = [];
    this.kfm1 = [];
    this.kfm2 = [];

    this.kozfx = [];
    this.kozfy = [];
    this.kozfm1 = [];
    this.kozfm2 = [];

    this.nfx = [];
    this.nfy = [];
    this.nfm1 = [];
    this.nfm2 = [];

    this.kdbx = [];
    this.kdby = [];
    this.kdbm1 = [];
    this.kdbm2 = [];

    this.ndbx = [];
    this.ndby = [];
    this.ndbm1 = [];
    this.ndbm2 = [];

    this.kbx = [];
    this.kby = [];
    this.kbm1 = [];
    this.kbm2 = [];

    this.kozbx = [];
    this.kozby = [];
    this.kozbm1 = [];
    this.kozbm2 = [];

    this.nbx = [];
    this.nby = [];
    this.nbm1 = [];
    this.nbm2 = [];

    this.kfx[0] = 435;
    this.kfy[0] = 160;
    this.kfm1[0] = 93;
    this.kfm2[0] = 70;

    this.kfx[1] = 928;
    this.kfy[1] = 120;
    this.kfm1[1] = 93;
    this.kfm2[1] = 70;

    this.kfx[2] = 2552;
    this.kfy[2] = 160;
    this.kfm1[2] = 93;
    this.kfm2[2] = 70;

    this.kfx[3] = 3045;
    this.kfy[3] = 100;
    this.kfm1[3] = 93;
    this.kfm2[3] = 70;

    this.kfx[4] = 4698;
    this.kfy[4] = 140;
    this.kfm1[4] = 93;
    this.kfm2[4] = 70;

    this.kfx[5] = 5191;
    this.kfy[5] = 100;
    this.kfm1[5] = 93;
    this.kfm2[5] = 70;

    this.kfx[6] = 6815;
    this.kfy[6] = 160;
    this.kfm1[6] = 93;
    this.kfm2[6] = 70;

    this.kfx[7] = 7308;
    this.kfy[7] = 100;
    this.kfm1[7] = 93;
    this.kfm2[7] = 70;

    this.kfx[8] = 8961;
    this.kfy[8] = 160;
    this.kfm1[8] = 93;
    this.kfm2[8] = 70;

    this.kozfx[0] = 1711;
    this.kozfy[0] = 120;
    this.kozfm1[0] = 134;
    this.kozfm2[0] = 71;

    this.kozfx[1] = 3828;
    this.kozfy[1] = 100;
    this.kozfm1[1] = 134;
    this.kozfm2[1] = 71;

    this.kozfx[2] = 5974;
    this.kozfy[2] = 100;
    this.kozfm1[2] = 134;
    this.kozfm2[2] = 71;

    this.kozfx[3] = 8091;
    this.kozfy[3] = 120;
    this.kozfm1[3] = 134;
    this.kozfm2[3] = 71;

    this.nfx[0] = 1334;
    this.nfy[0] = 160;
    this.nfm1[0] = 178;
    this.nfm2[0] = 69;

    this.nfx[1] = 3451;
    this.nfy[1] = 160;
    this.nfm1[1] = 178;
    this.nfm2[1] = 69;

    this.nfx[2] = 5597;
    this.nfy[2] = 140;
    this.nfm1[2] = 178;
    this.nfm2[2] = 69;

    this.nfx[3] = 7714;
    this.nfy[3] = 160;
    this.nfm1[3] = 178;
    this.nfm2[3] = 69;

    this.kdbx[0] = 783;
    this.kdby[0] = 527;
    this.kdbm1[0] = 136;
    this.kdbm2[0] = 54;

    this.kdbx[1] = 2929;
    this.kdby[1] = 527;
    this.kdbm1[1] = 136;
    this.kdbm2[1] = 54;

    this.kdbx[2] = 5046;
    this.kdby[2] = 527;
    this.kdbm1[2] = 136;
    this.kdbm2[2] = 54;

    this.kdbx[3] = 7163;
    this.kdby[3] = 527;
    this.kdbm1[3] = 136;
    this.kdbm2[3] = 54;

    this.kdbx[3] = 9319;
    this.kdby[3] = 527;
    this.kdbm1[3] = 136;
    this.kdbm2[3] = 54;

    this.ndbx[0] = 116;
    this.ndby[0] = 504;
    this.ndbm1[0] = 222;
    this.ndbm2[0] = 100;

    this.ndbx[1] = 4379;
    this.ndby[1] = 504;
    this.ndbm1[1] = 222;
    this.ndbm2[1] = 100;

    this.ndbx[2] = 6496;
    this.ndby[2] = 504;
    this.ndbm1[2] = 222;
    this.ndbm2[2] = 100;

    this.ndbx[3] = 8642;
    this.ndby[3] = 504;
    this.ndbm1[3] = 222;
    this.ndbm2[3] = 100;

    this.ndbx[4] = 2262;
    this.ndby[4] = 531;
    this.ndbm1[4] = 222;
    this.ndbm2[4] = 100;

    this.kbx[0] = 1102;
    this.kby[0] = 530;
    this.kbm1[0] = 88;
    this.kbm2[0] = 45;

    this.kbx[1] = 3219;
    this.kby[1] = 530;
    this.kbm1[1] = 88;
    this.kbm2[1] = 45;

    this.kbx[2] = 5365;
    this.kby[2] = 530;
    this.kbm1[2] = 88;
    this.kbm2[2] = 45;

    this.kbx[3] = 7482;
    this.kby[3] = 530;
    this.kbm1[3] = 88;
    this.kbm2[3] = 45;

    this.kozbx[0] = 1914;
    this.kozby[0] = 531;
    this.kozbm1[0] = 133;
    this.kozbm2[0] = 46;

    this.kozbx[1] = 4031;
    this.kozby[1] = 531;
    this.kozbm1[1] = 133;
    this.kozbm2[1] = 46;

    this.kozbx[2] = 6177;
    this.kozby[2] = 531;
    this.kozbm1[2] = 133;
    this.kozbm2[2] = 46;

    this.nbx[0] = 609;
    this.nby[0] = 531;
    this.nbm1[0] = 179;
    this.nbm2[0] = 46;

    this.nbx[1] = 2755;
    this.nby[1] = 531;
    this.nbm1[1] = 179;
    this.nbm2[1] = 46;

    this.nbx[2] = 4872;
    this.nby[2] = 531;
    this.nbm1[2] = 179;
    this.nbm2[2] = 46;



    this.kfmegjelenites = function () {


        for (let i = 0; i <= this.kfx.length - 1; i++) {
            if (abs(this.kfx[i] - jatekos.x) < 1200 && abs(this.kfy[i] - jatekos.y) < 800) {
                image(this.p_kf, this.kfx[i], this.kfy[i], this.kfm1[i], this.kfm2[i]);
            }
        }

        for (let i = 0; i <= this.kozfx.length - 1; i++) {
            if (abs(this.kozfx[i] - jatekos.x) < 1200 && abs(this.kozfy[i] - jatekos.y) < 800) {
                image(this.p_kozf, this.kozfx[i], this.kozfy[i], this.kozfm1[i], this.kozfm2[i]);
            }
        }

        for (let i = 0; i <= this.nfx.length - 1; i++) {
            if (abs(this.nfx[i] - jatekos.x) < 1200 && abs(this.nfy[i] - jatekos.y) < 800) {
                image(this.p_nf, this.nfx[i], this.nfy[i], this.nfm1[i], this.nfm2[i]);
            }
        }

        for (let i = 0; i <= this.kdbx.length - 1; i++) {
            if (abs(this.kdbx[i] - jatekos.x) < 12000 && abs(this.kdby[i] - jatekos.y) < 800) {
                image(this.p_kdb, this.kdbx[i], this.kdby[i], this.kdbm1[i], this.kdbm2[i]);
            }
        }

        for (let i = 0; i <= this.ndbx.length - 1; i++) {
            if (abs(this.ndbx[i] - jatekos.x) < 1200 && abs(this.ndby[i] - jatekos.y) < 800) {
                image(this.p_ndb, this.ndbx[i], this.ndby[i], this.ndbm1[i], this.ndbm2[i]);
            }
        }

        for (let i = 0; i <= this.kbx.length - 1; i++) {
            if (abs(this.kbx[i] - jatekos.x) < 1200 && abs(this.kby[i] - jatekos.y) < 800) {
                image(this.p_kb, this.kbx[i], this.kby[i], this.kbm1[i], this.kbm2[i]);
            }
        }

        for (let i = 0; i <= this.kozbx.length - 1; i++) {
            if (abs(this.kozbx[i] - jatekos.x) < 1200 && abs(this.kozby[i] - jatekos.y) < 800) {
                image(this.p_kozb, this.kozbx[i], this.kozby[i], this.kozbm1[i], this.kozbm2[i]);
            }
        }

        for (let i = 0; i <= this.nbx.length - 1; i++) {
            if (abs(this.nbx[i] - jatekos.x) < 1200 && abs(this.nby[i] - jatekos.y) < 800) {
                image(this.p_nb, this.nbx[i], this.nby[i], this.nbm1[i], this.nbm2[i]);
            }
        }

        textSize(36);
        fill(255);

        text("MARIO", this.pontx - 20, 55);
        text(nf(this.pont, 6, 0), this.pontx - 22, 90);

        image(this.penz, this.eremx, 68, 28, 37);
        text("x", this.eremx + 11, 55);
        text(nf(this.erem, 2, 0), this.eremx + 32, 55);

        text("WORLD", this.vilagx - 20, 55);
        text(this.vilag, this.vilagx, 90);

        text("TIME", this.idox - 20, 55);
        text(this.ido, this.idox, 90);
        if (this.millis <= millis() && this.ido > 0 && flg_goal == false) {
            this.millis = this.millis + 500;
            this.ido -= 1;
        }

    }


}

function Jatekos() {


    this.x = 150;
    this.y = 269;
    this.m1 = 30;
    this.m2 = 41;

    this.balra = false;
    this.jobbra = false;
    this.guggolas = false;
    this.ugras = false;
    this.lmugras = 90;
    this.talaj = 0;
    this.fut = false;

    this.em = height;
    this.zuhanas = false;

    this.msebesseg = 3;
    this.zsebesseg = 6;
    this.usebesseg = 30;
    this.ugrasi = 0;
    this.gomba_ = 0;
    this.ge = true;
    this.halal = false;
    this.hx = 0;
    this.hy = 0;
    this.ax = 0;
    this.ay = 0;
    this.ht = 0;
    this.halhatatlan = false;
    this.villog = false;
    this.vi = 0;
    this.millish_ = 0;

    this.kep = [];
    this.kep[0] = loadImage("libmario/images/km_0.png");
    this.kep[1] = loadImage("libmario/images/km_1.png");
    this.kep[2] = loadImage("libmario/images/km_2.png");
    this.kep[3] = loadImage("libmario/images/km_3.png");
    this.kep[4] = loadImage("libmario/images/km_4.png");
    this.kep[5] = loadImage("libmario/images/km_5.png");
    this.kep[6] = loadImage("libmario/images/nm_0.png");
    this.kep[7] = loadImage("libmario/images/nm_1.png");
    this.kep[8] = loadImage("libmario/images/nm_2.png");
    this.kep[9] = loadImage("libmario/images/nm_3.png");
    this.kep[10] = loadImage("libmario/images/nm_4.png");
    this.kep[11] = loadImage("libmario/images/nm_5.png");
    this.kep[12] = loadImage("libmario/images/nm_6.png");
    this.kep[13] = loadImage("libmario/images/kmb_0.png");
    this.kep[14] = loadImage("libmario/images/kmb_1.png");
    this.kep[15] = loadImage("libmario/images/kmb_2.png");
    this.kep[16] = loadImage("libmario/images/kmb_3.png");
    this.kep[17] = loadImage("libmario/images/kmb_3.png");
    this.kep[18] = loadImage("libmario/images/kmb_5.png");
    this.kep[19] = loadImage("libmario/images/nmb_0.png");
    this.kep[20] = loadImage("libmario/images/nmb_1.png");
    this.kep[21] = loadImage("libmario/images/nmb_2.png");
    this.kep[22] = loadImage("libmario/images/nmb_3.png");
    this.kep[23] = loadImage("libmario/images/nmb_4.png");
    this.kep[24] = loadImage("libmario/images/nmb_5.png");
    this.kep[25] = loadImage("libmario/images/nmb_6.png");
    this.kep[26] = loadImage("libmario/images/mh.png");

    this.millis_ = 0;
    this.je = false;
    this.ji = 0;

    this.sebesseg_v2 = 3;

    this.megjelenites = function () {

        if (jatekos.y > height) {
            //this.halal = true;
        }

        if (palya_vege.jv == false || palya_vege.av == true) {
            if (this.balra == true && talaj_fal.tiltasb == false) {
                if (this.guggolas == false || this.gomba_ == 0 || this.zuhanas == true) {
                    this.x -= this.msebesseg;
                    this.x -= 5;
                }
            }

            if (this.jobbra == true && talaj_fal.tiltasj == false) {
                if (this.guggolas == false || this.gomba_ == 0 || this.zuhanas == true) {
                    this.x += this.msebesseg;
                }
            }

            if (jatekos.guggolas == true) {
                if (this.gomba_ > 0 && this.ugras == false && this.zuhanas == false) {
                    this.m1 = 39;
                    this.m2 = 55;
                }
            } else {
                if (talaj_fal.felallase == true) {
                    if (this.gomba_ == 0) {
                        this.m1 = 30;
                        this.m2 = 41;
                    }
                    if (this.gomba_ > 0 || virag.felvett_virag == true) {
                        this.m1 = 41;
                        this.m2 = 75;
                    }
                }
            }


            if (this.ugras == true) {
                this.ugrasi += this.usebesseg;
                this.msebesseg = 6
                this.y -= map(this.ugrasi, 1, this.lmugras, 20, 6);

                if (this.ugrasi >= this.lmugras) {
                    this.ugras = false;
                    this.ugrasi = 0;
                    this.msebesseg = 0;
                }
            }

            if (this.ugras == false) {
                this.lmugras = 890;
            }

            if (this.y + this.zsebesseg + jatekos.m2 / 2 <= this.em) {
                this.y += this.zsebesseg
                this.zuhanas = true;
                this.msebesseg = 0;
            }

            if (this.em - this.y - this.m2 / 2 <= this.zsebesseg) {
                if (this.ugras == false) {
                    this.y = this.em - this.m2 / 2
                    this.zuhanas = false;
                }
            }
            if (jatekos.balra == true || jatekos.jobbra == true) {
                if (this.millis_ <= millis()) {
                    this.millis_ = millis() + 70;
                    this.ji--;
                    if (this.ji <= 0) {
                        this.ji = 3;
                    }
                }
            }

            if (this.guggolas == true && this.ugras == false && (this.gomba_ > 0 || virag.felvett_virag == true)) {
                this.ji = 5;
            }

            if (this.ugras == true || this.zuhanas == true) {
                this.ji = 4;
            }

            if (/*key == "" &&*/ this.zuhanas == false && this.balra == false && this.jobbra == false && this.guggolas == false) {
                this.ji = 0;
            }
        }
        if (virag.felvett_virag == true) {
            this.ji += 6;

        }

        if (loves.e == true && virag.felvett_virag == true && this.guggolas == false) {
            this.ji = 12;
        }


        if (this.villog == false && this.halal == false) {
            if (loves.i == "j") {
                switch (this.ji) {
                    case 0:
                        image(this.kep[0], this.x, this.y, this.m1, this.m2);
                        break;
                    case 1:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 33;
                            this.m2 = 40;
                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 39;
                            this.m2 = 75;
                        }
                        image(this.kep[1], this.x, this.y, this.m1, this.m2);
                        break;
                    case 2:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 28;
                            this.m2 = 40;

                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 34;
                            this.m2 = 75;
                        }
                        image(this.kep[2], this.x, this.y, this.m1, this.m2);
                        break;
                    case 3:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 33;
                            this.m2 = 40;
                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 39;
                            this.m2 = 75;
                        }
                        image(this.kep[3], this.x, this.y, this.m1, this.m2);
                        break;
                    case 4:
                        image(this.kep[4], this.x, this.y, this.m1, this.m2);
                        break;
                    case 5:
                        this.m1 = 39;
                        this.m2 = 55;
                        image(this.kep[5], this.x, this.y, this.m1, this.m2);
                        break;
                    case 6:
                        image(this.kep[6], this.x, this.y, this.m1, this.m2);
                        break;
                    case 7:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 33;
                            this.m2 = 40;
                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 39;
                            this.m2 = 75;
                        }
                        image(this.kep[7], this.x, this.y, this.m1, this.m2);
                        break;
                    case 8:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 28;
                            this.m2 = 40;

                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 34;
                            this.m2 = 75;
                        }
                        image(this.kep[8], this.x, this.y, this.m1, this.m2);
                        break;
                    case 9:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 33;
                            this.m2 = 40;
                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 39;
                            this.m2 = 75;
                        }
                        image(this.kep[9], this.x, this.y, this.m1, this.m2);
                        break;
                    case 10:
                        image(this.kep[10], this.x, this.y, this.m1, this.m2);
                        break;
                    case 11:
                        this.m1 = 39;
                        this.m2 = 55;
                        image(this.kep[11], this.x, this.y, this.m1, this.m2);
                        break;
                    case 12:
                        this.m1 = 39;
                        this.m2 = 75;
                        image(this.kep[12], this.x, this.y, this.m1, this.m2);
                        break;
                    default:

                        break;
                }
            } else {
                switch (this.ji) {
                    case 0:
                        image(this.kep[13], this.x, this.y, this.m1, this.m2);
                        break;
                    case 1:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 33;
                            this.m2 = 40;
                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 39;
                            this.m2 = 75;
                        }
                        image(this.kep[14], this.x, this.y, this.m1, this.m2);
                        break;
                    case 2:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 28;
                            this.m2 = 40;

                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 34;
                            this.m2 = 75;
                        }
                        image(this.kep[15], this.x, this.y, this.m1, this.m2);
                        break;
                    case 3:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 33;
                            this.m2 = 40;
                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 39;
                            this.m2 = 75;
                        }
                        image(this.kep[16], this.x, this.y, this.m1, this.m2);
                        break;
                    case 4:
                        image(this.kep[17], this.x, this.y, this.m1, this.m2);
                        break;
                    case 5:
                        this.m1 = 39;
                        this.m2 = 55;
                        image(this.kep[18], this.x, this.y, this.m1, this.m2);
                        break;
                    case 6:
                        image(this.kep[19], this.x, this.y, this.m1, this.m2);
                        break;
                    case 7:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 33;
                            this.m2 = 40;
                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 39;
                            this.m2 = 75;
                        }
                        image(this.kep[20], this.x, this.y, this.m1, this.m2);
                        break;
                    case 8:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 28;
                            this.m2 = 40;

                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 34;
                            this.m2 = 75;
                        }
                        image(this.kep[21], this.x, this.y, this.m1, this.m2);
                        break;
                    case 9:
                        if (this.gomba_ == 0 || virag.felvett_virag == false) {
                            this.m1 = 33;
                            this.m2 = 40;
                        }
                        if (this.gomba_ > 0 || virag.felvett_virag == true) {
                            this.m1 = 39;
                            this.m2 = 75;
                        }
                        image(this.kep[22], this.x, this.y, this.m1, this.m2);
                        break;
                    case 10:
                        image(this.kep[23], this.x, this.y, this.m1, this.m2);
                        break;
                    case 11:
                        this.m1 = 39;
                        this.m2 = 55;
                        image(this.kep[24], this.x, this.y, this.m1, this.m2);
                        break;
                    case 12:
                        this.m1 = 39;
                        this.m2 = 75;
                        image(this.kep[25], this.x, this.y, this.m1, this.m2);
                        break;
                }
            }

            if (virag.felvett_virag == true) {
                this.ji -= 6;
            }

        }


        for (var j = 1; j <= ellenseg_gomba.x.length - 1; j++) {
            if (ellenseg_gomba.halott[j] == false && this.halhatatlan == false && this.halal == false) {
                if (abs(this.x - ellenseg_gomba.x[j]) < 20 && abs(this.y - ellenseg_gomba.y[j]) < 20) {
                    if (this.gomba_ == 0 && virag.felvett_virag == false) {
                        this.halal = true;
                        this.hx = this.x;
                        this.hy = this.y;
                        this.ht = 0;
                    } else {
                        this.gomba_ = 0;
                        virag.felvett_virag = false;
                        this.halhatatlan = true;
                        this.vi = 0;
                    }
                }
            }
        }


        for (var j = 1; j <= ellenseg_kacsa.x.length - 1; j++) {
            if (ellenseg_kacsa.kv[j] == false && this.halhatatlan == false && this.halal == false) {
                if (abs(this.x - ellenseg_kacsa.x[j]) < 20 && abs(this.y - ellenseg_kacsa.y[j]) < 20) {
                    if (this.gomba_ == 0 && virag.felvett_virag == false) {
                        this.halal = true;
                        this.hx = this.x;
                        this.hy = this.y;
                    } else {
                        this.gomba_ = 0;
                        virag.felvett_virag = false;
                        this.halhatatlan = true;
                        this.vi = 0;
                    }
                }
            }
        }

        if (this.halhatatlan == true) {
            if (this.millish_ < millis()) {
                this.millish_ = millis() + 100;
                this.vi++;
                if (this.villog == false) {
                    this.villog = true;
                } else {
                    this.villog = false;
                }
            }

            if (this.vi >= 30) {
                this.villog = false
                this.halhatatlan = false;
            }

        }

        this.meghal = function () {

            if (this.halal == true && this.halhatatlan == false) {
                this.ht += 0.2
                this.ax = this.hx + 40 * this.ht * cos(-90);
                this.ay = this.hy + 40 * this.ht * sin(-90) + 9.81 / 2 * sq(this.ht);
                image(this.kep[26], this.ax, this.ay, 35, 37);

            }
        }

    }
}

function Kilott_ellen_anim() {

    this.x = [];
    this.y = [];
    this.xe = [];
    this.ye = [];
    this.l = [];
    this.sz = [];
    this.kg = [];
    this.t = [];
    this.kep = [];
    this.i = 0;

    this.l[1] = false;
    this.l[2] = false;
    this.l[3] = false;
    this.l[4] = false;
    this.l[5] = false;
    this.l[6] = false;

    this.kep[0] = loadImage("libmario/images/ellenseg_1_bal.png");
    this.kep[1] = loadImage("libmario/images/kacsa_teknos_3.png");
    this.megjelenites = function () {

        for (var i = 1; i <= 6; i++) {
            if (this.l[i] == true) {
                this.t[i] += 0.2;

                if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
                    this.xe[i] -= jatekos.sebesseg_v2;
                }

                this.x[i] = this.xe[i] + 30 * this.t[i] * cos(this.sz[i]);
                this.y[i] = this.ye[i] + 30 * this.t[i] * sin(this.sz[i]) + 9.81 / 2 * sq(this.t[i]);
                translate(this.x[i], this.y[i]);
                rotate(180);
                if (this.kg[i] == "g") {
                    image(this.kep[0], 0, 0, 40, 39);
                } else {
                    image(this.kep[1], 0, 0, 39, 34);
                }
                rotate(-180);
                translate(-this.x[i], -this.y[i]);
            }
        }
    }
}

function Loves() {

    this.x = [];
    this.y = [];
    this.m1 = [];
    this.m2 = [];
    this.sz = [];
    this.xe = [];
    this.ye = [];
    this.t = [];
    this.lat = [];
    this.anim = [];
    this.vx = [];
    this.vy = [];
    this.vm1 = [];
    this.vm2 = [];
    this.te = [];
    this.millis_ = 0;
    this.e = false;

    this.kep = [];

    this.kep[1] = loadImage("libmario/images/tuzgolyo_1.png");
    this.kep[2] = loadImage("libmario/images/tuzgolyo_2.png");
    this.l = -1;
    this.i = "j";
    this.te[1] = false;
    this.te[2] = false;

    this.millis_ = 0;
    this.i = 0;

    this.megjelenites = function () {

        if (this.e == true && this.millis_ <= millis() && jatekos.guggolas == false) {

            if (this.millis_ <= millis()) {
                if (this.l == 10) {
                    this.l = -1;
                }
                this.l += 2;
                this.millis_ = millis() + 500;
            }

            this.m1[this.l] = 19;
            this.m2[this.l] = 19;
            this.m1[this.l + 1] = 19;
            this.m2[this.l + 1] = 19;

            this.te[this.l] = false;
            this.te[this.l + 1] = false;

            this.x[this.l] = jatekos.x
            this.y[this.l] = jatekos.y
            this.x[this.l + 1] = jatekos.x
            this.y[this.l + 1] = jatekos.y
            this.t[this.l] = 0;
            this.t[this.l + 1] = 0;

            this.lat[this.l] = true;
            this.lat[this.l + 1] = true;

            this.anim[this.l] = false;
            this.anim[this.l + 1] = false;

            if (this.i == "j") {
                this.sz[this.l] = 15;
                this.sz[this.l + 1] = 15;

                this.xe[this.l] = jatekos.x - 15;
                this.xe[this.l + 1] = jatekos.x + 19;

                this.ye[this.l] = jatekos.y - 13
                this.ye[this.l + 1] = jatekos.y - 12

                if (kilott_ellen_anim.i == 6) {
                    kilott_ellen_anim.i = 0;
                }

                kilott_ellen_anim.sz[kilott_ellen_anim.i + 1] = -60;
                kilott_ellen_anim.sz[kilott_ellen_anim.i + 2] = -60;

            } else {
                this.sz[this.l] = 165;
                this.sz[this.l + 1] = 165;

                this.xe[this.l] = jatekos.x + 19;
                this.xe[this.l + 1] = jatekos.x - 19;

                this.ye[this.l] = jatekos.y - 15
                this.ye[this.l + 1] = jatekos.y - 12

                kilott_ellen_anim.sz[kilott_ellen_anim.i + 1] = 240;
                kilott_ellen_anim.sz[kilott_ellen_anim.i + 2] = 240;

            }
        }

        for (var i = 1; i <= this.l + 1; i++) {
            if (this.lat[i] == true) {
                this.t[i] += 0.2;
                this.x[i] = this.xe[i] + 60 * this.t[i] * cos(this.sz[i]);
                this.y[i] = this.ye[i] + 60 * this.t[i] * sin(this.sz[i]) + 9.81 / 2 * sq(this.t[i]);

                image(this.kep[1], this.x[i], this.y[i], this.m1[i], this.m2[i]);

                if (abs(jatekos.x - this.x[i]) > 1500) {
                    this.lat[i] = false;
                }

                if (this.x[i] < 0 || this.x[i] > width) {
                    this.lat[i] = false;
                }

                for (var j = 1; j <= ellenseg_gomba.x.length - 1; j++) {
                    if (ellenseg_gomba.halott[j] == false && this.lat[i] == true) {
                        if (abs(this.x[i] - ellenseg_gomba.x[j]) < 20 && abs(this.y[i] - ellenseg_gomba.y[j]) < 20) {
                            this.lat[i] = false;
                            ellenseg_gomba.halotti[j] = millis() - 1;
                            ellenseg_gomba.halott[j] = true;

                            pont_animacio.ai++;
                            pont_animacio.x[pont_animacio.ai] = ellenseg_gomba.x[j];
                            pont_animacio.y[pont_animacio.ai] = ellenseg_gomba.y[j];
                            pont_animacio.ye[pont_animacio.ai] = ellenseg_gomba.y[j];
                            pont_animacio.e[pont_animacio.ai] = 100;
                            pont_animacio.l[pont_animacio.ai] = true;
                            grafika.pont += pont_animacio.e[pont_animacio.ai];
                            this.anim[i] = true;
                            this.vx[i] = this.x[i];
                            this.vy[i] = this.y[i];
                            this.vm1[i] = 38 * 0.25;
                            this.vm2[i] = 43 * 0.25;
                            kilott_ellen_anim.i++;
                            kilott_ellen_anim.xe[kilott_ellen_anim.i] = ellenseg_gomba.x[j];
                            kilott_ellen_anim.ye[kilott_ellen_anim.i] = ellenseg_gomba.y[j];
                            kilott_ellen_anim.l[kilott_ellen_anim.i] = true;
                            kilott_ellen_anim.kg[kilott_ellen_anim.i] = "g";
                            kilott_ellen_anim.t[kilott_ellen_anim.i] = 0;
                        }
                    }
                }

                for (var j = 1; j <= ellenseg_kacsa.x.length - 1; j++) {
                    if (ellenseg_kacsa.kv[j] == false && this.lat[i] == true) {
                        if (abs(this.x[i] - ellenseg_kacsa.x[j]) < 20 && abs(this.y[i] - ellenseg_kacsa.y[j]) < 20) {
                            this.lat[i] = false;
                            ellenseg_kacsa.kv = true;
                            pont_animacio.ai++;
                            pont_animacio.x[pont_animacio.ai] = ellenseg_kacsa.x[j];
                            pont_animacio.y[pont_animacio.ai] = ellenseg_kacsa.y[j];
                            pont_animacio.ye[pont_animacio.ai] = ellenseg_kacsa.y[j];
                            pont_animacio.e[pont_animacio.ai] = 100;
                            pont_animacio.l[pont_animacio.ai] = true;
                            grafika.pont += pont_animacio.e[pont_animacio.ai];
                            this.anim[i] = true;
                            this.vx[i] = this.x[i];
                            this.vy[i] = this.y[i];
                            this.vm1[i] = 38 * 0.25;
                            this.vm2[i] = 43 * 0.25;
                            kilott_ellen_anim.i++;
                            kilott_ellen_anim.xe[kilott_ellen_anim.i] = ellenseg_kacsa.x[j];
                            kilott_ellen_anim.ye[kilott_ellen_anim.i] = ellenseg_kacsa.y[j];
                            kilott_ellen_anim.l[kilott_ellen_anim.i] = true;
                            kilott_ellen_anim.kg[kilott_ellen_anim.i] = "k";
                            kilott_ellen_anim.t[kilott_ellen_anim.i] = 0;
                        }
                    }
                }


            } else {
                if (this.anim[i] == true) {
                    image(this.kep[2], this.vx[i], this.vy[i], this.vm1[i], this.vm2[i]);
                    this.vm1[i] *= 1.2;
                    this.vm2[i] *= 1.2;
                    if (this.vm1[i] >= 38) {
                        this.anim[i] = false;
                    }
                }
            }
        }


    }
}


function Mozgasv() {

    this.e = false;
    this.t = 400;
    this.funkcio = function () {


        this.e = false

        if (jatekos.x >= 300) {
            jatekos.sebesseg_v2 = 4;
            jatekos.msebesseg = 0;
        } else {
            jatekos.sebesseg_v2 = 0;
            if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
                jatekos.msebesseg = 4;
            }
            if (jatekos.x < jatekos.m1 / 2) {
                talaj_fal.tiltasb = true;
            }
            if (jatekos.balra == true && talaj_fal.tiltasb == false) {
                jatekos.msebesseg = 0;
            }
        }

        for (let i = 0; i <= talaj_fal.x.length - 1; i++) {
            if (i >= 0 && i <= 230 || i >= 1000 && i <= 1012 || i >= 1050 && i <= 1081 || i >= 1100 && i <= 1198 || i >= 1300 && i <= 1302 || i >= 1350 && i <= 1350 || i >= 1400 && i <= 1401) {
                if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
                    talaj_fal.x[i] -= jatekos.sebesseg_v2;
                }
            }
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
            for (let i = 0; i <= grafika.kfx.length - 1; i++) {
                grafika.kfx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.kozfx.length - 1; i++) {
                grafika.kozfx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.nfx.length - 1; i++) {
                grafika.nfx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.kdbx.length - 1; i++) {
                grafika.kdbx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.ndbx.length - 1; i++) {
                grafika.ndbx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.kbx.length - 1; i++) {
                grafika.kbx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.kozbx.length - 1; i++) {
                grafika.kozbx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.nbx.length - 1; i++) {
                grafika.nbx[i] -= jatekos.sebesseg_v2;
            }
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
            talaj_fal.sebesseg_v2 = -jatekos.sebesseg_v2
        } else {
            talaj_fal.sebesseg_v2 = 0;
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
            if (gomba.balra == true && gomba.tiltasb == false) {
                gomba.sebesseg_v2 = jatekos.sebesseg_v2 + 3;
            }
            if (gomba.jobbra == true && gomba.tiltasj == false) {
                gomba.sebesseg_v2 = (jatekos.sebesseg_v2 - 3) * -1;
            }

            if (gomba.animation == true) {
                gomba.x -= jatekos.sebesseg_v2;
            }

        } else {
            gomba.sebesseg_v2 = 3;
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
            if (penz.lathato == true) {
                penz.sebesseg_v2 = jatekos.sebesseg_v2;
            }
        } else {
            penz.sebesseg_v2 = 0;
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
            if (virag.lathato == true || virag.animation == true) {
                virag.sebesseg_v2 = jatekos.sebesseg_v2;
            }
        } else {
            virag.sebesseg_v2 = 0;
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
            palya_vege.rx -= jatekos.sebesseg_v2;
            palya_vege.zx -= jatekos.sebesseg_v2;
            palya_vege.vx -= jatekos.sebesseg_v2;
        }

        for (var i = 1; i <= ellenseg_gomba.x.length - 1; i++) {
            if (jatekos.jobbra == true && talaj_fal.tiltasj == false && ellenseg_gomba.indul[i] == false && jatekos.halal == false) {
                ellenseg_gomba.x[i] -= jatekos.sebesseg_v2;
                ellenseg_gomba.sebesseg_v2[i] = 0;

                if (abs(jatekos.x - ellenseg_gomba.x[1]) < 470) {
                    ellenseg_gomba.indul[1] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[2]) < 470) {
                    ellenseg_gomba.indul[2] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[3]) < 470) {
                    ellenseg_gomba.indul[3] = true;
                    ellenseg_gomba.indul[4] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[5]) < 470) {
                    ellenseg_gomba.indul[5] = true;
                    ellenseg_gomba.indul[6] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[7]) < 470) {
                    ellenseg_gomba.indul[7] = true;
                    ellenseg_gomba.indul[8] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[9]) < 470) {
                    ellenseg_gomba.indul[9] = true;
                    ellenseg_gomba.indul[10] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[11]) < 470) {
                    ellenseg_gomba.indul[11] = true;
                    ellenseg_gomba.indul[12] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[13]) < 470) {
                    ellenseg_gomba.indul[13] = true;
                    ellenseg_gomba.indul[14] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[15]) < 470) {
                    ellenseg_gomba.indul[15] = true;
                    ellenseg_gomba.indul[16] = true;
                }

            } else {
                if (ellenseg_gomba.x[i] > -400) {

                    if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {

                        if (ellenseg_gomba.balra[i] == true && ellenseg_gomba.tiltasb[i] == false && ellenseg_gomba.halott[i] == false) {
                            ellenseg_gomba.sebesseg_v2[i] = jatekos.sebesseg_v2 + 2;
                        }
                        if (ellenseg_gomba.jobbra[i] == true && ellenseg_gomba.tiltasj[i] == false && ellenseg_gomba.halott[i] == false) {
                            ellenseg_gomba.sebesseg_v2[i] = (jatekos.sebesseg_v2 - 2) * -1;
                        }
                    } else {
                        ellenseg_gomba.sebesseg_v2[i] = 2;
                    }
                } else {
                    ellenseg_gomba.halott[i] = true;
                    ellenseg_gomba.halotti[i] = millis() - 1;

                }
            }
        }

        for (var i = 1; i <= ellenseg_kacsa.x.length - 1; i++) {
            if (jatekos.jobbra == true && talaj_fal.tiltasj == false && ellenseg_kacsa.indul[i] == false && jatekos.halal == false) {
                ellenseg_kacsa.x[i] -= jatekos.sebesseg_v2;
                ellenseg_kacsa.sebesseg_v2[i] = 0;

                if (abs(jatekos.x - ellenseg_kacsa.x[1]) < 470) {
                    ellenseg_kacsa.indul[1] = true;
                }

            } else {
                if (ellenseg_kacsa.x[i] > -400) {

                    if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {

                        if (ellenseg_kacsa.vhmi[i] == "s") {
                            ellenseg_kacsa.sebesseg_v2[1] = 2;

                            if (ellenseg_kacsa.balra[i] == true && ellenseg_kacsa.tiltasb[i] == false) {
                                ellenseg_kacsa.sebesseg_v2[i] = jatekos.sebesseg_v2 + 2;
                            }
                            if (ellenseg_kacsa.jobbra[i] == true && ellenseg_kacsa.tiltasj[i] == false) {
                                ellenseg_kacsa.sebesseg_v2[i] = (jatekos.sebesseg_v2 - 2) * -1;
                            }
                        } else {
                            if (ellenseg_kacsa.vhmi[i] == "b") {
                                ellenseg_kacsa.sebesseg_v2[i] = -4;
                            }
                            if (ellenseg_kacsa.vhmi[i] == "j") {
                                ellenseg_kacsa.sebesseg_v2[i] = -4;
                            }
                        }

                    } else {
                        if (ellenseg_kacsa.vhmi[i] == "b" || ellenseg_kacsa.vhmi[i] == "j") {
                            ellenseg_kacsa.sebesseg_v2[i] = 0;
                        }
                        if (ellenseg_kacsa.vhmi[i] == "s") {
                            ellenseg_kacsa.sebesseg_v2[1] = 2;
                        }
                    }
                } else {
                    ellenseg_kacsa.halott[i] = true;
                    ellenseg_kacsa.halotti[i] = millis() - 1;

                }
            }
        }



    }
}

function Mozgasv() {

    this.e = false;
    this.t = 400;
    this.funkcio = function () {


        this.e = false

        if (jatekos.x >= 300) {
            jatekos.sebesseg_v2 = 4;
            jatekos.msebesseg = 0;
        } else {
            jatekos.sebesseg_v2 = 0;
            if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
                jatekos.msebesseg = 4;
            }
            if (jatekos.x < jatekos.m1 / 2) {
                talaj_fal.tiltasb = true;
            }
            if (jatekos.balra == true && talaj_fal.tiltasb == false) {
                jatekos.msebesseg = 0;
            }
        }

        for (let i = 0; i <= talaj_fal.x.length - 1; i++) {
            if (i >= 0 && i <= 230 || i >= 1000 && i <= 1012 || i >= 1050 && i <= 1081 || i >= 1100 && i <= 1198 || i >= 1300 && i <= 1302 || i >= 1350 && i <= 1350 || i >= 1400 && i <= 1401) {
                if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
                    talaj_fal.x[i] -= jatekos.sebesseg_v2;
                }
            }
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
            for (let i = 0; i <= grafika.kfx.length - 1; i++) {
                grafika.kfx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.kozfx.length - 1; i++) {
                grafika.kozfx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.nfx.length - 1; i++) {
                grafika.nfx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.kdbx.length - 1; i++) {
                grafika.kdbx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.ndbx.length - 1; i++) {
                grafika.ndbx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.kbx.length - 1; i++) {
                grafika.kbx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.kozbx.length - 1; i++) {
                grafika.kozbx[i] -= jatekos.sebesseg_v2;
            }

            for (let i = 0; i <= grafika.nbx.length - 1; i++) {
                grafika.nbx[i] -= jatekos.sebesseg_v2;
            }
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
            talaj_fal.sebesseg_v2 = -jatekos.sebesseg_v2
        } else {
            talaj_fal.sebesseg_v2 = 0;
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
            if (gomba.balra == true && gomba.tiltasb == false) {
                gomba.sebesseg_v2 = jatekos.sebesseg_v2 + 3;
            }
            if (gomba.jobbra == true && gomba.tiltasj == false) {
                gomba.sebesseg_v2 = (jatekos.sebesseg_v2 - 3) * -1;
            }

            if (gomba.animation == true) {
                gomba.x -= jatekos.sebesseg_v2;
            }

        } else {
            gomba.sebesseg_v2 = 3;
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
            if (penz.lathato == true) {
                penz.sebesseg_v2 = jatekos.sebesseg_v2;
            }
        } else {
            penz.sebesseg_v2 = 0;
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
            if (virag.lathato == true || virag.animation == true) {
                virag.sebesseg_v2 = jatekos.sebesseg_v2;
            }
        } else {
            virag.sebesseg_v2 = 0;
        }

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
            palya_vege.rx -= jatekos.sebesseg_v2;
            palya_vege.zx -= jatekos.sebesseg_v2;
            palya_vege.vx -= jatekos.sebesseg_v2;
        }

        for (var i = 1; i <= ellenseg_gomba.x.length - 1; i++) {
            if (jatekos.jobbra == true && talaj_fal.tiltasj == false && ellenseg_gomba.indul[i] == false && jatekos.halal == false) {
                ellenseg_gomba.x[i] -= jatekos.sebesseg_v2;
                ellenseg_gomba.sebesseg_v2[i] = 0;

                if (abs(jatekos.x - ellenseg_gomba.x[1]) < 470) {
                    ellenseg_gomba.indul[1] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[2]) < 470) {
                    ellenseg_gomba.indul[2] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[3]) < 470) {
                    ellenseg_gomba.indul[3] = true;
                    ellenseg_gomba.indul[4] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[5]) < 470) {
                    ellenseg_gomba.indul[5] = true;
                    ellenseg_gomba.indul[6] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[7]) < 470) {
                    ellenseg_gomba.indul[7] = true;
                    ellenseg_gomba.indul[8] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[9]) < 470) {
                    ellenseg_gomba.indul[9] = true;
                    ellenseg_gomba.indul[10] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[11]) < 470) {
                    ellenseg_gomba.indul[11] = true;
                    ellenseg_gomba.indul[12] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[13]) < 470) {
                    ellenseg_gomba.indul[13] = true;
                    ellenseg_gomba.indul[14] = true;
                }

                if (abs(jatekos.x - ellenseg_gomba.x[15]) < 470) {
                    ellenseg_gomba.indul[15] = true;
                    ellenseg_gomba.indul[16] = true;
                }

            } else {
                if (ellenseg_gomba.x[i] > -400) {

                    if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {

                        if (ellenseg_gomba.balra[i] == true && ellenseg_gomba.tiltasb[i] == false && ellenseg_gomba.halott[i] == false) {
                            ellenseg_gomba.sebesseg_v2[i] = jatekos.sebesseg_v2 + 2;
                        }
                        if (ellenseg_gomba.jobbra[i] == true && ellenseg_gomba.tiltasj[i] == false && ellenseg_gomba.halott[i] == false) {
                            ellenseg_gomba.sebesseg_v2[i] = (jatekos.sebesseg_v2 - 2) * -1;
                        }
                    } else {
                        ellenseg_gomba.sebesseg_v2[i] = 2;
                    }
                } else {
                    ellenseg_gomba.halott[i] = true;
                    ellenseg_gomba.halotti[i] = millis() - 1;

                }
            }
        }

        for (var i = 1; i <= ellenseg_kacsa.x.length - 1; i++) {
            if (jatekos.jobbra == true && talaj_fal.tiltasj == false && ellenseg_kacsa.indul[i] == false && jatekos.halal == false) {
                ellenseg_kacsa.x[i] -= jatekos.sebesseg_v2;
                ellenseg_kacsa.sebesseg_v2[i] = 0;

                if (abs(jatekos.x - ellenseg_kacsa.x[1]) < 470) {
                    ellenseg_kacsa.indul[1] = true;
                }

            } else {
                if (ellenseg_kacsa.x[i] > -400) {

                    if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {

                        if (ellenseg_kacsa.vhmi[i] == "s") {
                            ellenseg_kacsa.sebesseg_v2[1] = 2;

                            if (ellenseg_kacsa.balra[i] == true && ellenseg_kacsa.tiltasb[i] == false) {
                                ellenseg_kacsa.sebesseg_v2[i] = jatekos.sebesseg_v2 + 2;
                            }
                            if (ellenseg_kacsa.jobbra[i] == true && ellenseg_kacsa.tiltasj[i] == false) {
                                ellenseg_kacsa.sebesseg_v2[i] = (jatekos.sebesseg_v2 - 2) * -1;
                            }
                        } else {
                            if (ellenseg_kacsa.vhmi[i] == "b") {
                                ellenseg_kacsa.sebesseg_v2[i] = -4;
                            }
                            if (ellenseg_kacsa.vhmi[i] == "j") {
                                ellenseg_kacsa.sebesseg_v2[i] = -4;
                            }
                        }

                    } else {
                        if (ellenseg_kacsa.vhmi[i] == "b" || ellenseg_kacsa.vhmi[i] == "j") {
                            ellenseg_kacsa.sebesseg_v2[i] = 0;
                        }
                        if (ellenseg_kacsa.vhmi[i] == "s") {
                            ellenseg_kacsa.sebesseg_v2[1] = 2;
                        }
                    }
                } else {
                    ellenseg_kacsa.halott[i] = true;
                    ellenseg_kacsa.halotti[i] = millis() - 1;

                }
            }
        }



    }
}

function Palya_vege() {

    this.rx = 8828;
    this.ry = 343;
    this.zx = 8803;
    this.zy = 175;
    this.vx = 9182
    this.vy = 452.5
    this.kep = [];
    this.kep[0] = loadImage("libmario/images/var.png");
    this.kep[1] = loadImage("libmario/images/zaszlo.png");
    this.kep[2] = loadImage("libmario/images/rud.png");
    this.jv = false;
    this.millis_ = 0;
    this.av = false;
    this.zi = false;
    this.mt = false

    this.megjelenites = function () {
        image(this.kep[0], this.vx, this.vy, 196, 200);
        image(this.kep[1], this.zx, this.zy, 40, 39);
        image(this.kep[2], this.rx, this.ry, 39, 420);

        if (abs(jatekos.x - this.rx) < 10 && this.jv == false && this.av == false) {
            this.jv = true;
            this.millis_ = millis() + 100;
            this.mt = true;
            jatekos.jobbra = false;
            pont_animacio.ai++;
            pont_animacio.x[pont_animacio.ai] = jatekos.x + 20;
            pont_animacio.y[pont_animacio.ai] = jatekos.y;
            pont_animacio.ye[pont_animacio.ai] = jatekos.y;

            if (jatekos.y < 204) {
                pont_animacio.e[pont_animacio.ai] = 5000;
            }

            if (jatekos.y < 264 && jatekos.y > 204) {
                pont_animacio.e[pont_animacio.ai] = 2000;
            }

            if (jatekos.y < 324 && jatekos.y > 264) {
                pont_animacio.e[pont_animacio.ai] = 1000;
            }

            if (jatekos.y < 384 && jatekos.y > 324) {
                pont_animacio.e[pont_animacio.ai] = 500;
            }

            if (jatekos.y > 444) {
                pont_animacio.e[pont_animacio.ai] = 100;
            }
            if (jatekos.y < 444 && jatekos.y > 384) {
                pont_animacio.e[pont_animacio.ai] = 200;
            }
            flg_goal = true;
            pont_animacio.l[pont_animacio.ai] = true;
            grafika.pont += pont_animacio.e[pont_animacio.ai];
        }

        if (this.jv == true && this.millis_ < millis()) {
            if (jatekos.y <= 460) {
                this.zi = true;
                jatekos.y += 2;
            } else {
                this.jv = false
                this.av = true;
            }
        }

        if (this.av == true) {
            if (abs(this.vx - jatekos.x) > 5) {
                jatekos.jobbra = true;
            } else {
                jatekos.jobbra = false;

            }
        }

        if (this.zi == true) {
            if (this.zy < 481) {
                this.zy += 2;
            }
        }

    }
}



function Penz() {

    this.x = 1061;
    this.y = 360;
    this.m1e = 28;
    this.m2e = 35;
    this.m1 = 28;
    this.m2 = 35;
    this.kep = [];
    this.forgas = 1;
    this.zuhan = false;
    this.lathato = false;
    this.yelvartmin = 0;
    this.yelvartmax = 0;
    this.kep[1] = loadImage("libmario/images/money_1.png");
    this.kep[2] = loadImage("libmario/images/money_2.png");
    this.kep[3] = loadImage("libmario/images/money_3.png");

    this.kep[0] = this.kep[1];
    this.pl = false;
    this.px = 0;
    this.py = 0;

    this.sebesseg_v2 = 0;

    this.megjelenites = function () {

        if (talaj_fal.kerd == 1000 || talaj_fal.kerd == 1001 || talaj_fal.kerd == 1007 || talaj_fal.kerd == 1009) {
            if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
                grafika.pont += 200;
                grafika.erem += 1;
                this.lathato = true;
                this.zuhan = false;
            }
            talaj_fal.kerd = 0;
        }

        if (talaj_fal.kerd == 1002 || talaj_fal.kerd == 1004 || talaj_fal.kerd == 1005 || talaj_fal.kerd == 1010) {
            if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
                grafika.pont += 200;
                grafika.erem += 1;
                this.lathato = true;
                this.zuhan = false;
            }
            talaj_fal.kerd = 0;
        }

        if (talaj_fal.kerd == 1011 || talaj_fal.kerd == 1012) {
            if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
                grafika.pont += 200;
                grafika.erem += 1;
                this.lathato = true;
                this.zuhan = false;
            }
            talaj_fal.kerd = 0;
        }


        if (this.lathato == true) {
            this.x -= this.sebesseg_v2;
            image(this.kep[0], this.x, this.y, this.m1, this.m2);
        }

        switch (this.forgas) {
            case 1:
                if (this.m1 >= this.m1e / 3) {
                    this.m1 -= 1.7;
                } else {
                    this.forgas = 2;
                    this.kep[0] = this.kep[3];
                }
                break;
            case 2:
                if (this.m1 <= this.m1e * 1.1) {
                    this.m1 += 1.7;
                } else {
                    this.forgas = 3;
                    this.kep[0] = this.kep[2];
                }
                break;
            case 3:
                if (this.m1 <= this.m1e * 1.6) {
                    this.m1 += 1.7;
                } else {
                    this.forgas = 1;
                    this.m1 = this.m1e * 0.9;
                    this.kep[0] = this.kep[1];
                }
                break;
            default:
        }

        if (this.lathato == true) {
            if (this.zuhan == false) {
                if (this.y >= this.yelvartmin) {
                    this.y -= 5;
                } else {
                    this.zuhan = true;
                }
            } else {
                if (this.y <= this.yelvartmax) {
                    this.y += 5;
                } else {
                    this.lathato = false;
                    this.zuhan = false
                    pont_animacio.ai++;
                    pont_animacio.x[pont_animacio.ai] = this.x;
                    pont_animacio.y[pont_animacio.ai] = this.y;
                    pont_animacio.ye[pont_animacio.ai] = this.y;
                    pont_animacio.e[pont_animacio.ai] = 200;
                    pont_animacio.l[pont_animacio.ai] = true;
                    grafika.pont += pont_animacio.e[pont_animacio.ai];
                }
            }
        }

        if (this.pl == true) {
            if (this.py >= this.y - 50) {
                fill(255);
                textSize(25);
                text("200", this.px, this.py);
                this.py -= 2;
            } else {
                this.pl = false;
            }
        }


    }
}

function Pont_animacio() {

    this.x = [];
    this.y = [];
    this.ye = [];
    this.e = [];
    this.l = [];

    this.ai = 0;

    this.megjelenites = function () {

        for (var i = 0; i <= this.ai; i++) {
            if (this.l[i] == true) {
                if (this.y[i] >= this.ye[i] - 90) {
                    fill(255);
                    textSize(25);

                    if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
                        this.x[i] -= jatekos.sebesseg_v2;
                    }

                    text(this.e[i], this.x[i], this.y[i]);
                    this.y[i] -= 2;
                } else {
                    this.l[i] = false;
                }
            }
        }

    }
}

function Talaj_fal() {

    this.x = [];
    this.y = [];
    this.m1 = [];
    this.m2 = [];
    this.tm = [];
    this.ey = [];
    this.szt = [];
    this.kerdi = [];
    this.anim = [];

    this.nx_1 = [];
    this.ny_1 = [];
    this.nx_2 = [];
    this.ny_2 = [];
    this.nx_3 = [];
    this.ny_3 = [];
    this.nx_4 = [];
    this.ny_4 = [];

    this.nxe_1 = [];
    this.nye_1 = [];
    this.nxe_2 = [];
    this.nye_2 = [];
    this.nxe_3 = [];
    this.nye_3 = [];
    this.nxe_4 = [];
    this.nye_4 = [];
    this.t = [];
    this.nei = [];
    this.ni = 0;

    this.kerdsmillis = 0;
    this.kerdl = false;

    this.sebesseg_v2 = 0;

    this.p_kcs = loadImage("libmario/images/kcs.png");
    this.p_kozcs = loadImage("libmario/images/kozcs.png");
    this.p_ncs = loadImage("libmario/images/ncs.png");
    this.p_kerd = loadImage("libmario/images/kerd.png");
    this.p_t = loadImage("libmario/images/t.png");
    this.p_l = loadImage("libmario/images/l.png");
    this.p_padlo = loadImage("libmario/images/padlo.png");
    this.p_kerdu = loadImage("libmario/images/kerd_utve.png");
    this.p_kerds = loadImage("libmario/images/kerd_s.png");
    this.ptt = loadImage("libmario/images/tt.png");

    this.x[0] = 10;
    this.y[0] = 580;
    this.m1[0] = 41;
    this.m2[0] = 55;

    this.x[1] = 3044;
    this.y[1] = 580;
    this.m1[1] = 41;
    this.m2[1] = 55;

    this.x[2] = 3180;
    this.y[2] = 580;
    this.m1[2] = 41;
    this.m2[2] = 55;

    this.x[3] = 3836;
    this.y[3] = 580;
    this.m1[3] = 41;
    this.m2[3] = 55;

    this.x[4] = 3973;
    this.y[4] = 580;
    this.m1[4] = 41;
    this.m2[4] = 55;

    this.x[5] = 6761
    this.y[5] = 580;
    this.m1[5] = 41;
    this.m2[5] = 55;

    this.x[6] = 6902;
    this.y[6] = 580;
    this.m1[6] = 41;
    this.m2[6] = 55;

    this.x[7] = this.x[0];
    this.y[7] = this.y[0];
    this.m1[7] = this.m1[0];
    this.m2[7] = this.m2[0];

    for (var i = 8; i <= 80; i++) {
        this.x[i] = this.x[i - 1] + this.m1[i - 1];
        this.y[i] = this.y[i - 1];
        this.m1[i] = this.m1[i - 1];
        this.m2[i] = this.m2[i - 1];
    }

    this.x[81] = this.x[2];
    this.y[81] = this.y[2];
    this.m1[81] = this.m1[2];
    this.m2[81] = this.m2[2];

    for (var i = 82; i <= 96; i++) {
        this.x[i] = this.x[i - 1] + this.m1[i - 1];
        this.y[i] = this.y[i - 1];
        this.m1[i] = this.m1[i - 1];
        this.m2[i] = this.m2[i - 1];
    }

    this.x[97] = this.x[4];
    this.y[97] = this.y[4];
    this.m1[97] = this.m1[4];
    this.m2[97] = this.m2[4];

    for (var i = 98; i <= 164; i++) {
        this.x[i] = this.x[i - 1] + this.m1[i - 1];
        this.y[i] = this.y[i - 1];
        this.m1[i] = this.m1[i - 1];
        this.m2[i] = this.m2[i - 1];
    }

    this.x[165] = this.x[6];
    this.y[165] = this.y[6];
    this.m1[165] = this.m1[6];
    this.m2[165] = this.m2[6];

    for (var i = 166; i <= 230; i++) {
        this.x[i] = this.x[i - 1] + this.m1[i - 1];
        this.y[i] = this.y[i - 1];
        this.m1[i] = this.m1[i - 1];
        this.m2[i] = this.m2[i - 1];
    }

    this.x[1000] = 754;
    this.y[1000] = 400;
    this.m1[1000] = 44;
    this.m2[1000] = 44;
    this.tm[1000] = false;
    this.ey[1000] = this.y[1000];
    this.kerdi[1000] = 0;

    this.x[1001] = 1015;
    this.y[1001] = 240;
    this.m1[1001] = 44;
    this.m2[1001] = 44;
    this.tm[1001] = false;
    this.ey[1001] = this.y[1001];
    this.kerdi[1001] = 0;

    this.x[1002] = 4727;
    this.y[1002] = 400;
    this.m1[1002] = 44;
    this.m2[1002] = 44;
    this.tm[1002] = false;
    this.ey[1002] = this.y[1002];
    this.kerdi[1002] = 0;

    this.x[1003] = 4857;
    this.y[1003] = 220;
    this.m1[1003] = 44;
    this.m2[1003] = 44;
    this.tm[1003] = false;
    this.ey[1003] = this.y[1003];
    this.kerdi[1003] = 0;

    this.x[1004] = 4857;
    this.y[1004] = 400;
    this.m1[1004] = 44;
    this.m2[1004] = 44;
    this.tm[1004] = false;
    this.ey[1004] = this.y[1004];
    this.kerdi[1004] = 0;

    this.x[1005] = 4988;
    this.y[1005] = 400;
    this.m1[1005] = 44;
    this.m2[1005] = 44;
    this.tm[1005] = false;
    this.ey[1005] = this.y[1005];
    this.kerdi[1005] = 0;

    this.x[1006] = 972;
    this.y[1006] = 400;
    this.m1[1006] = 44;
    this.m2[1006] = 44;
    this.tm[1006] = false;
    this.ey[1006] = this.y[1006];
    this.kerdi[1006] = 0;

    this.x[1007] = 1060;
    this.y[1007] = 400;
    this.m1[1007] = 44;
    this.m2[1007] = 44;
    this.tm[1007] = false;
    this.ey[1007] = this.y[1007];
    this.kerdi[1007] = 0;

    this.x[1008] = 3495;
    this.y[1008] = 400;
    this.m1[1008] = 44;
    this.m2[1008] = 44;
    this.tm[1008] = false;
    this.ey[1008] = this.y[1008];
    this.kerdi[1008] = 0;

    this.x[1009] = 4192;
    this.y[1009] = 220;
    this.m1[1009] = 44;
    this.m2[1009] = 44;
    this.tm[1009] = false;
    this.ey[1009] = this.y[1009];
    this.kerdi[1009] = 0;

    this.x[1010] = 5757;
    this.y[1010] = 220;
    this.m1[1010] = 44;
    this.m2[1010] = 44;
    this.tm[1010] = false;
    this.ey[1010] = this.y[1010];
    this.kerdi[1010] = 0;

    this.x[1011] = 5801;
    this.y[1011] = 220;
    this.m1[1011] = 44;
    this.m2[1011] = 44;
    this.tm[1011] = false;
    this.ey[1011] = this.y[1011];
    this.kerdi[1011] = 0;

    this.x[1012] = 7570;
    this.y[1012] = 400;
    this.m1[1012] = 44;
    this.m2[1012] = 44;
    this.tm[1012] = false;
    this.ey[1012] = this.y[1012];
    this.kerdi[1012] = 0;

    this.x[1050] = 928;
    this.y[1050] = 400;
    this.m1[1050] = 44;
    this.m2[1050] = 44;
    this.tm[1050] = false;
    this.ey[1050] = this.y[1050];
    this.szt[1050] = false;

    this.x[1051] = 3451;
    this.y[1051] = 400;
    this.m1[1051] = 44;
    this.m2[1051] = 44;
    this.tm[1051] = false;
    this.ey[1051] = this.y[1051];
    this.szt[1051] = false;

    this.x[1052] = 3567;
    this.y[1052] = 220;
    this.m1[1052] = 44;
    this.m2[1052] = 44;
    this.tm[1052] = false;
    this.ey[1052] = this.y[1052];
    this.szt[1052] = false;

    this.x[1053] = 4060;
    this.y[1053] = 220;
    this.m1[1053] = 44;
    this.m2[1053] = 44;
    this.tm[1053] = false;
    this.ey[1053] = this.y[1053];
    this.szt[1053] = false;

    this.x[1054] = 4205;
    this.y[1054] = 400;
    this.m1[1054] = 44;
    this.m2[1054] = 44;
    this.tm[1054] = false;
    this.ey[1054] = this.y[1054];
    this.szt[1054] = false;

    this.x[1055] = 4466;
    this.y[1055] = 400;
    this.m1[1055] = 44;
    this.m2[1055] = 44;
    this.ey[1055] = this.y[1055];
    this.szt[1055] = false;

    this.x[1056] = 5249;
    this.y[1056] = 400;
    this.m1[1056] = 44;
    this.m2[1056] = 44;
    this.tm[1056] = false;
    this.ey[1056] = this.y[1056];
    this.szt[1056] = false;

    this.x[1057] = 5394;
    this.y[1057] = 220;
    this.m1[1057] = 44;
    this.m2[1057] = 44;
    this.tm[1057] = false;
    this.ey[1057] = this.y[1057];
    this.szt[1057] = false;

    this.x[1058] = 5713;
    this.y[1058] = 220;
    this.m1[1058] = 44;
    this.m2[1058] = 44;
    this.tm[1058] = false;
    this.ey[1058] = this.y[1058];
    this.szt[1058] = false;

    this.x[1059] = 5742;
    this.y[1059] = 400;
    this.m1[1059] = 44;
    this.m2[1059] = 44;
    this.tm[1059] = false;
    this.ey[1059] = this.y[1059];
    this.szt[1059] = false;

    this.x[1060] = 7482;
    this.y[1060] = 400;
    this.m1[1060] = 44;
    this.m2[1060] = 44;
    this.tm[1060] = false;
    this.ey[1060] = this.y[1060];
    this.szt[1060] = false;

    this.x[1061] = 1016;
    this.y[1061] = 400;
    this.m1[1061] = 44;
    this.m2[1061] = 44;
    this.tm[1061] = false;
    this.ey[1061] = this.y[1061];
    this.szt[1061] = false;

    this.x[1062] = 1104;
    this.y[1062] = 400;
    this.m1[1062] = 44;
    this.m2[1062] = 44;
    this.tm[1062] = false;
    this.ey[1062] = this.y[1062];
    this.szt[1062] = false;

    this.x[1063] = 3539;
    this.y[1063] = 400;
    this.m1[1063] = 44;
    this.m2[1063] = 44;
    this.tm[1063] = false;
    this.ey[1063] = this.y[1063];
    this.szt[1063] = false;

    this.x[1064] = 4510;
    this.y[1064] = 400;
    this.m1[1064] = 44;
    this.m2[1064] = 44;
    this.tm[1064] = false;
    this.ey[1064] = this.y[1064];
    this.szt[1064] = false;

    for (i = 1065; i <= 1071; i++) {
        this.x[i] = 3567 + (i - 1064) * 44;
        this.y[i] = 220;
        this.m1[i] = 44;
        this.m2[i] = 44;
        this.tm[i] = false;
        this.ey[i] = this.y[i];
        this.szt[i] = false;
    }

    for (i = 1072; i <= 1073; i++) {
        this.x[i] = 4060 + (i - 1071) * 44;
        this.y[i] = 220;
        this.m1[i] = 44;
        this.m2[i] = 44;
        this.tm[i] = false;
        this.ey[i] = this.y[i];
        this.szt[i] = false;
    }

    this.x[1074] = 5845;
    this.y[1074] = -220;
    this.m1[1074] = 44;
    this.m2[1074] = 44;
    this.tm[1074] = false;
    this.ey[1074] = this.y[1074];
    this.szt[74] = false;

    this.x[1075] = 5845;
    this.y[1075] = -220;
    this.m1[1075] = 44;
    this.m2[1075] = 44;
    this.tm[1075] = false;
    this.ey[1075] = this.y[1075];
    this.szt[1075] = false;

    this.x[1076] = 5845;
    this.y[1076] = 220;
    this.m1[1076] = 44;
    this.m2[1076] = 44;
    this.tm[1076] = false;
    this.ey[1076] = this.y[1076];
    this.szt[1076] = false;

    this.x[1077] = 5786;
    this.y[1077] = 400;
    this.m1[1077] = 44;
    this.m2[1077] = 44;
    this.tm[1077] = false;
    this.ey[1077] = this.y[1077];
    this.szt[1077] = false;

    this.x[1078] = 5482;
    this.y[1078] = 220;
    this.m1[1078] = 44;
    this.m2[1078] = 44;
    this.tm[1078] = false;
    this.ey[1078] = this.y[1078];
    this.szt[1078] = false;

    this.x[1079] = 7526;
    this.y[1079] = 400;
    this.m1[1079] = 44;
    this.m2[1079] = 44;
    this.tm[1079] = false;
    this.ey[1079] = this.y[1079];
    this.szt[1079] = false;

    this.x[1080] = 7614;
    this.y[1080] = 400;
    this.m1[1080] = 44;
    this.m2[1080] = 44;
    this.tm[1080] = false;
    this.ey[1080] = this.y[1080];
    this.szt[1080] = false;

    this.x[1081] = 5438;
    this.y[1081] = 220;
    this.m1[1081] = 44;
    this.m2[1081] = 44;
    this.tm[1081] = false;
    this.ey[1081] = this.y[1081];
    this.szt[1081] = false;

    this.x[1100] = 5974;
    this.y[1100] = 531;
    this.m1[1100] = 44;
    this.m2[1100] = 44;

    this.x[1101] = 6235;
    this.y[1101] = 531;
    this.m1[1101] = 44;
    this.m2[1101] = 44;

    this.x[1102] = 6583;
    this.y[1102] = 531;
    this.m1[1102] = 44;
    this.m2[1102] = 44;

    this.x[1103] = 6902;
    this.y[1103] = 531;
    this.m1[1103] = 44;
    this.m2[1103] = 44;

    this.x[1104] = 8070;
    this.y[1104] = 531;
    this.m1[1104] = 44;
    this.m2[1104] = 44;

    let ind = [];

    ind[1] = 0;
    ind[2] = 0;
    ind[3] = 0;
    ind[4] = 4;

    this.x[1105] = this.x[1100] + 3 * 44;
    this.y[1105] = this.y[1100];
    this.m1[1105] = this.m1[1100];
    this.m2[1105] = this.m2[1100];

    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            this.x[1106 + ind[1]] = this.x[1105] - (ind[2] * 44);
            this.y[1106 + ind[1]] = this.y[1105] - (ind[3] * 44);
            this.m1[1106 + ind[1]] = this.m1[1105 + ind[1]];
            this.m2[1106 + ind[1]] = this.m2[1105 + ind[1]];
            if (ind[2] < ind[4]) {
                ind[1]++;
            }
            ind[2]++;
        }
        ind[2] = 0;
        ind[3]++;
        ind[4]--;
    }

    ind[1] = 0;
    ind[2] = 0;
    ind[3] = 0;
    ind[4] = 4;


    this.x[1116] = this.x[1101];
    this.y[1116] = this.y[1101];
    this.m1[1116] = this.m1[1101];
    this.m2[1116] = this.m2[1101];

    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            this.x[1117 + ind[1]] = this.x[1116] + (ind[2] * 44);
            this.y[1117 + ind[1]] = this.y[1116] - (ind[3] * 44);
            this.m1[1117 + ind[1]] = this.m1[1116 + ind[1]];
            this.m2[1117 + ind[1]] = this.m2[1116 + ind[1]];
            if (ind[2] < ind[4]) {
                ind[1]++;
            }
            ind[2]++;
        }
        ind[2] = 0;
        ind[3]++;
        ind[4]--;
    }

    ind[1] = 0;
    ind[2] = 0;
    ind[3] = 0;
    ind[4] = 5;


    this.x[1127] = this.x[1102] + 4 * 44;
    this.y[1127] = this.y[1102];
    this.m1[1127] = this.m1[1102];
    this.m2[1127] = this.m2[1102];

    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 5; j++) {
            this.x[1128 + ind[1]] = this.x[1127] - (ind[2] * 44);
            this.y[1128 + ind[1]] = this.y[1127] - (ind[3] * 44);
            this.m1[1128 + ind[1]] = this.m1[1127 + ind[1]];
            this.m2[1128 + ind[1]] = this.m2[1127 + ind[1]];
            if (ind[2] < ind[4]) {
                ind[1]++;
            }
            ind[2]++;
        }
        ind[2] = 0;
        ind[3]++;
        ind[4]--;
    }

    ind[1] = 0;
    ind[2] = 0;
    ind[3] = 0;
    ind[4] = 4;


    this.x[1142] = this.x[1103];
    this.y[1142] = this.y[1103];
    this.m1[1142] = this.m1[1103];
    this.m2[1142] = this.m2[1103];

    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            this.x[1143 + ind[1]] = this.x[1142] + (ind[2] * 44);
            this.y[1143 + ind[1]] = this.y[1142] - (ind[3] * 44);
            this.m1[1143 + ind[1]] = this.m1[1142 + ind[1]];
            this.m2[1143 + ind[1]] = this.m2[1142 + ind[1]];
            if (ind[2] < ind[4]) {
                ind[1]++;
            }
            ind[2]++;
        }
        ind[2] = 0;
        ind[3]++;
        ind[4]--;
    }

    ind[1] = 0;
    ind[2] = 0;
    ind[3] = 0;
    ind[4] = 9;


    this.x[1153] = this.x[1104] + 8 * 44;
    this.y[1153] = this.y[1104];
    this.m1[1153] = this.m1[1104];
    this.m2[1153] = this.m2[1104];

    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= 9; j++) {
            this.x[1154 + ind[1]] = this.x[1153] - (ind[2] * 44);
            this.y[1154 + ind[1]] = this.y[1153] - (ind[3] * 44);
            this.m1[1154 + ind[1]] = this.m1[1153 + ind[1]];
            this.m2[1154 + ind[1]] = this.m2[1153 + ind[1]];
            if (ind[2] < ind[4]) {
                ind[1]++;
            }
            ind[2]++;
        }
        ind[2] = 0;
        ind[3]++;
        ind[4]--;
    }

    this.x[1198] = 8828;
    this.y[1198] = 531;
    this.m1[1198] = 44;
    this.m2[1198] = 44;


    this.x[1300] = 1305;
    this.y[1300] = 508;
    this.m1[1300] = 88;
    this.m2[1300] = 90;

    this.x[1301] = 7279;
    this.y[1301] = 508;
    this.m1[1301] = 88;
    this.m2[1301] = 90;

    this.x[1302] = 8004;
    this.y[1302] = 508;
    this.m1[1302] = 88;
    this.m2[1302] = 90;

    this.x[1350] = 1740;
    this.y[1350] = 484;
    this.m1[1350] = 88;
    this.m2[1350] = 137;

    this.x[1400] = 2117;
    this.y[1400] = 462;
    this.m1[1400] = 88;
    this.m2[1400] = 181;

    this.x[1401] = 2581;
    this.y[1401] = 462;
    this.m1[1401] = 88;
    this.m2[1401] = 181;

    this.tiltasj = false;
    this.tiltasb = false;
    this.felallase = false;
    this.fi = 0;
    this.fit = 0;
    this.kerd = 0;

    this.megjelenites = function () {

        jatekos.em = height + 100;
        gomba.em = height + 100;

        for (var j = 1; j <= ellenseg_gomba.x.length; j++) {
            ellenseg_gomba.em[j] = height + 100;
        }

        for (var j = 1; j <= ellenseg_kacsa.x.length; j++) {
            ellenseg_kacsa.em[j] = height + 100;
        }

        this.tiltasj = false;
        this.tiltasb = false;
        gomba.tiltasb = false;
        gomba.tiltasj = false;
        //print("fi: " + this.fi + "fit: " + this.fit);
        if (this.fi >= this.fit) {
            this.felallase = true;
        }

        this.fi = 0;
        this.fit = 0;

        for (let i = 0; i <= this.x.length - 1; i++) {
            if (abs(this.x[i] - jatekos.x) < 3000 && abs(this.y[i] - jatekos.y) < 800) {
                if (i >= 0 && i <= 230 || i >= 1000 && i <= 1012 || (i >= 1050 && i <= 1081 && this.szt[i] == false) || i >= 1100 && i <= 1198 || i >= 1300 && i <= 1302 || i >= 1350 && i <= 1350 || i >= 1400 && i <= 1401) {
                    this.fit++;

                    let jbo = jatekos.x - jatekos.m1 / 2;
                    let jjo = jatekos.x + jatekos.m1 / 2;
                    let jfo = jatekos.y - jatekos.m2 / 10;
                    let jao = jatekos.y + jatekos.m2 / 2;

                    let gbo = gomba.x - gomba.m1 / 2;
                    let gjo = gomba.x + gomba.m1 / 2;
                    let gfo = gomba.y - gomba.m2 / 2;
                    let gao = gomba.y + gomba.m2 / 2;

                    let fbo = this.x[i] - this.m1[i] / 2;
                    let fjo = this.x[i] + this.m1[i] / 2;
                    let ffo = this.y[i] - this.m2[i] / 2;
                    let fao = this.y[i] + this.m2[i] / 2;

                    if (gbo < fjo && gjo > fbo && gao <= ffo) {
                        if (gomba.em > ffo) {
                            gomba.em = ffo;
                        }
                    }


                    if (jbo < fjo && jjo > fbo && jao <= ffo) {
                        if (jatekos.em > ffo) {
                            jatekos.em = ffo;
                        }
                    }

                    if (jatekos.ugras == true) {
                        if (jbo < fjo && jjo > fbo && jao > ffo && jfo < fao) {
                            jatekos.ugrasi = 0;
                            jatekos.ugras = false;
                        }
                    }

                    if (jatekos.guggolas == true || this.felallase == false) {
                        this.felallase = false;
                        if (jfo - 20 > fao || jjo < fbo || jbo > fjo || jao <= ffo) {
                            this.fi++;
                        }
                    }

                    if (jbo - (jatekos.sebesseg_v2 + 8) < fjo && jjo + (jatekos.sebesseg_v2 + 8) > fbo && jao > ffo && jfo < fao) {
                        if (jatekos.x < this.x[i]) {
                            this.tiltasj = true;
                        } else {
                            this.tiltasb = true;
                        }
                    }

                    for (var j = 1; j <= loves.l + 1; j++) {
                        if (loves.lat[j] == true) {

                            let lbo = loves.x[j] - loves.m1[j] / 2;
                            let ljo = loves.x[j] + loves.m1[j] / 2;
                            let lfo = loves.y[j] - loves.m2[j] / 2;
                            let lao = loves.y[j] + loves.m2[j] / 2;

                            if (lbo < fjo && ljo > fbo && lao > ffo && lfo < fao) {
                                if (abs(loves.y[j] - ffo) < 12) {
                                    loves.xe[j] = loves.x[j];
                                    loves.ye[j] = loves.y[j];
                                    loves.t[j] = 0;

                                    if (loves.te[j] == false) {
                                        loves.te[j] = true;
                                        if (loves.sz[j] == 15) {
                                            loves.sz[j] = -22;
                                        } else {
                                            loves.sz[j] = 202;
                                        }
                                    }

                                } else {
                                    loves.lat[j] = false;
                                    loves.anim[j] = true;
                                    loves.vx[j] = loves.x[j];
                                    loves.vy[j] = loves.y[j];
                                    loves.vm1[j] = 38 * 0.25;
                                    loves.vm2[j] = 43 * 0.25;
                                }
                            }
                        }
                    }

                    for (var j = 1; j <= ellenseg_gomba.x.length; j++) {
                        let egbo = ellenseg_gomba.x[j] - ellenseg_gomba.m1 / 2;
                        let egjo = ellenseg_gomba.x[j] + ellenseg_gomba.m1 / 2;
                        let egfo = ellenseg_gomba.y[j] - ellenseg_gomba.m2 / 2;
                        let egao = ellenseg_gomba.y[j] + ellenseg_gomba.m2 / 2;


                        if (abs(this.x[jatekos.talaj] - ellenseg_gomba.x[j]) < ellenseg_gomba.m2 / 2 && abs(this.y[jatekos.talaj] - ellenseg_gomba.y[j]) < 100 && ellenseg_gomba.halott[j] == false) {
                            pont_animacio.ai++;
                            pont_animacio.x[pont_animacio.ai] = ellenseg_gomba.x[j];
                            pont_animacio.y[pont_animacio.ai] = ellenseg_gomba.y[j];
                            pont_animacio.ye[pont_animacio.ai] = ellenseg_gomba.y[j];
                            pont_animacio.e[pont_animacio.ai] = 100;
                            pont_animacio.l[pont_animacio.ai] = true;
                            grafika.pont += pont_animacio.e[pont_animacio.ai];
                            kilott_ellen_anim.i++;
                            kilott_ellen_anim.xe[kilott_ellen_anim.i] = ellenseg_gomba.x[j];
                            kilott_ellen_anim.ye[kilott_ellen_anim.i] = ellenseg_gomba.y[j];
                            kilott_ellen_anim.l[kilott_ellen_anim.i] = true;
                            kilott_ellen_anim.kg[kilott_ellen_anim.i] = "g";
                            kilott_ellen_anim.t[kilott_ellen_anim.i] = 0;
                            ellenseg_gomba.halott[j] = true;
                            ellenseg_gomba.halotti[j] = millis() - 1;

                            if (this.x[jatekos.talaj] < ellenseg_gomba.x[j]) {
                                kilott_ellen_anim.sz[kilott_ellen_anim.i] = -60;
                            } else {
                                kilott_ellen_anim.sz[kilott_ellen_anim.i] = 240;
                            }

                        }

                        if (egbo < fjo && egjo > fbo && egao <= ffo) {
                            if (ellenseg_gomba.em[j] > ffo) {
                                ellenseg_gomba.em[j] = ffo;
                            }
                        }

                        if (egbo - ellenseg_gomba.sebesseg_v2[j] < fjo && egjo + ellenseg_gomba.sebesseg_v2[j] > fbo && egao > ffo && egfo < fao) {
                            if (ellenseg_gomba.x[j] < this.x[i]) {
                                ellenseg_gomba.tiltasj[j] = true;
                            } else {
                                ellenseg_gomba.tiltasb[j] = true;
                            }
                        }

                    }

                    jatekos.talaj = -1;

                    for (var j = 1; j <= ellenseg_kacsa.x.length; j++) {
                        let ekbo = ellenseg_kacsa.x[j] - ellenseg_kacsa.m1 / 2;
                        let ekjo = ellenseg_kacsa.x[j] + ellenseg_kacsa.m1 / 2;
                        let ekfo = ellenseg_kacsa.y[j] - ellenseg_kacsa.m2 / 2;
                        let ekao = ellenseg_kacsa.y[j] + ellenseg_kacsa.m2 / 2;

                        if (ekbo < fjo && ekjo > fbo && ekao <= ffo) {
                            if (ellenseg_kacsa.em[j] > ffo) {
                                ellenseg_kacsa.em[j] = ffo;
                            }
                        }

                        if (ellenseg_kacsa.vh[j] == true) {
                            ekbo -= 10;
                            ekjo += 10;

                        }

                        if (ekbo - ellenseg_kacsa.sebesseg_v2[j] < fjo && ekjo + ellenseg_kacsa.sebesseg_v2[j] > fbo && ekao > ffo && ekfo < fao) {

                            if (ellenseg_kacsa.vh[j] == true) {
                                ellenseg_kacsa.vhms[j] *= -1;
                            }

                            if (ellenseg_kacsa.x[j] < this.x[i]) {
                                ellenseg_kacsa.tiltasj[j] = true;
                            } else {
                                ellenseg_kacsa.tiltasb[j] = true;
                            }
                        }

                    }

                    if (i >= 1050 && i <= 1081) {
                        if (jatekos.gomba_ == 0) {
                            if (this.szt[i] == false) {
                                if (this.tm[i] == true) {
                                    if (this.y[i] >= this.ey[i] - 22) {
                                        this.y[i] -= 4;
                                    } else {
                                        this.tm[i] = false;
                                    }
                                }
                                if (this.tm[i] == false) {
                                    if (this.y[i] != this.ey[i]) {
                                        this.y[i] += 4
                                    }
                                }
                            }
                        }

                        if (jatekos.gomba_ > 0 || virag.felvett_virag == true) {
                            if (this.tm[i] == true && this.szt[i] == false) {
                                this.szt[i] = true;
                                this.ni++;
                                if (this.ni > 4) {
                                    this.ni = 1;
                                }
                                switch (this.ni) {
                                    case 1:
                                        this.nx_1[1] = this.x[i] - 11;
                                        this.ny_1[1] = this.y[i] - 11;
                                        this.nx_1[2] = this.x[i] + 11;
                                        this.ny_1[2] = this.y[i] - 11;
                                        this.nx_1[3] = this.x[i] - 11;
                                        this.ny_1[3] = this.y[i] + 11;
                                        this.nx_1[4] = this.x[i] + 11;
                                        this.ny_1[4] = this.y[i] + 11;
                                        this.nxe_1[1] = this.nx_1[1];
                                        this.nye_1[1] = this.ny_1[1];
                                        this.nxe_1[2] = this.nx_1[2];
                                        this.nye_1[2] = this.ny_1[2];
                                        this.nxe_1[3] = this.nx_1[3];
                                        this.nye_1[3] = this.ny_1[3];
                                        this.nxe_1[4] = this.nx_1[4];
                                        this.nye_1[4] = this.ny_1[4];
                                        this.anim[1] = true;
                                        this.t[1] = 0;
                                        this.nei[1] = i;
                                        break;
                                    case 2:
                                        this.nx_2[1] = this.x[i] - 11;
                                        this.ny_2[1] = this.y[i] - 11;
                                        this.nx_2[2] = this.x[i] + 11;
                                        this.ny_2[2] = this.y[i] - 11;
                                        this.nx_2[3] = this.x[i] - 11;
                                        this.ny_2[3] = this.y[i] + 11;
                                        this.nx_2[4] = this.x[i] + 11;
                                        this.ny_2[4] = this.y[i] + 11;
                                        this.nxe_2[1] = this.nx_2[1];
                                        this.nye_2[1] = this.ny_2[1];
                                        this.nxe_2[2] = this.nx_2[2];
                                        this.nye_2[2] = this.ny_2[2];
                                        this.nxe_2[3] = this.nx_2[3];
                                        this.nye_2[3] = this.ny_2[3];
                                        this.nxe_2[4] = this.nx_2[4];
                                        this.nye_2[4] = this.ny_2[4];
                                        this.anim[2] = true;
                                        this.t[2] = 0;
                                        this.nei[2] = i;
                                        break;
                                    case 3:
                                        this.nx_3[1] = this.x[i] - 11;
                                        this.ny_3[1] = this.y[i] - 11;
                                        this.nx_3[2] = this.x[i] + 11;
                                        this.ny_3[2] = this.y[i] - 11;
                                        this.nx_3[3] = this.x[i] - 11;
                                        this.ny_3[3] = this.y[i] + 11;
                                        this.nx_3[4] = this.x[i] + 11;
                                        this.ny_3[4] = this.y[i] + 11;
                                        this.nxe_3[1] = this.nx_3[1];
                                        this.nye_3[1] = this.ny_3[1];
                                        this.nxe_3[2] = this.nx_3[2];
                                        this.nye_3[2] = this.ny_3[2];
                                        this.nxe_3[3] = this.nx_3[3];
                                        this.nye_3[3] = this.ny_3[3];
                                        this.nxe_3[4] = this.nx_3[4];
                                        this.nye_3[4] = this.ny_3[4];
                                        this.anim[3] = true;
                                        this.t[3] = 0;
                                        this.nei[3] = i;
                                        break;
                                    case 4:
                                        this.nx_4[1] = this.x[i] - 11;
                                        this.ny_4[1] = this.y[i] - 11;
                                        this.nx_4[2] = this.x[i] + 11;
                                        this.ny_4[2] = this.y[i] - 11;
                                        this.nx_4[3] = this.x[i] - 11;
                                        this.ny_4[3] = this.y[i] + 11;
                                        this.nx_4[4] = this.x[i] + 11;
                                        this.ny_4[4] = this.y[i] + 11;
                                        this.nxe_4[1] = this.nx_4[1];
                                        this.nye_4[1] = this.ny_4[1];
                                        this.nxe_4[2] = this.nx_4[2];
                                        this.nye_4[2] = this.ny_4[2];
                                        this.nxe_4[3] = this.nx_4[3];
                                        this.nye_4[3] = this.ny_4[3];
                                        this.nxe_4[4] = this.nx_4[4];
                                        this.nye_4[4] = this.ny_4[4];
                                        this.anim[4] = true;
                                        this.t[4] = 0;
                                        this.nei[4] = i;
                                        break;
                                }

                            }
                        }
                    }

                    if (i >= 1000 && i <= 1012) {
                        if (this.tm[i] == true && this.kerdi[i] == 1) {
                            if (this.y[i] >= this.ey[i] - 22) {
                                this.y[i] -= 4;
                            } else {
                                this.tm[i] = false;
                            }
                        }
                        if (this.tm[i] == false) {
                            if (this.y[i] != this.ey[i]) {
                                this.y[i] += 4
                            }
                        }

                    }

                    if (jatekos.ugras == true) {
                        if (jbo < fjo && jjo > fbo && jao > ffo && jfo - jatekos.usebesseg < fao) {
                            if ((i >= 1050 && i <= 1081) || (i >= 1000 && i <= 1012)) {
                                if (penz.lathato == false) {
                                    this.tm[i] = true;
                                    this.ey[i] = this.y[i];
                                    this.kerdi[i]++;
                                    penz.x = this.x[i];
                                    penz.y = this.y[i] - this.m2[i] / 2 - penz.m2 / 2;
                                    this.kerd = i;
                                    if (this.kerdi[i] == 1 || (i >= 1050 && i <= 1081)) {
                                        jatekos.talaj = i;
                                    }
                                    //print(i);
                                    penz.yelvartmin = this.y[i] - 150
                                    penz.yelvartmax = this.y[i] - 70
                                }
                            }
                            jatekos.ugrasi = 0;
                            jatekos.ugras = false;
                        }

                    }

                    if (jatekos.guggolas == true || this.felallase == false) {
                        this.felallase = false;
                        if (jfo - 20 > fao || jjo < fbo || jbo > fjo || jao <= ffo) {
                            this.fi++;
                        }
                    }

                    if (jbo < fjo && jjo > fbo && jao > ffo && jfo < fao) {
                        if (i >= 1050 && i <= 1081 || i >= 1000 && i <= 1012 || i >= 1100 && i <= 1198) {
                            if (jatekos.x < this.x[i]) {
                                this.tiltasj = true;
                            } else {
                                this.tiltasb = true;
                            }
                        }
                    }

                    if (gbo - gomba.sebesseg_v2 < fjo && gjo + gomba.sebesseg_v2 > fbo && gao > ffo && gfo < fao) {
                        if (gomba.x < this.x[i]) {
                            gomba.tiltasj = true;
                        } else {
                            gomba.tiltasb = true;
                        }
                    }

                    if (i >= 0 && i < 1000) {
                        image(this.p_padlo, this.x[i], this.y[i], this.m1[i], this.m2[i]);
                    }


                    if (i >= 1300 && i <= 1302) {
                        image(this.p_kcs, this.x[i], this.y[i], this.m1[i], this.m2[i]);
                    }

                    if (i >= 1350 && i <= 1350) {
                        image(this.p_kozcs, this.x[i], this.y[i], this.m1[i], this.m2[i]);
                    }

                    if (i >= 1400 && i <= 1401) {
                        image(this.p_ncs, this.x[i], this.y[i], this.m1[i], this.m2[i]);
                    }

                    if (i >= 1100 && i <= 1198) {
                        image(this.p_l, this.x[i], this.y[i], this.m1[i], this.m2[i]);
                    }

                    if (i >= 1000 && i <= 1012) {
                        if (this.kerdi[i] == 0) {
                            if (this.kerdsmillis <= millis()) {
                                this.kerdsmillis = millis() + 350
                                if (this.kerdl == false) {
                                    this.kerdl = true;
                                } else {
                                    this.kerdl = false;
                                }
                            }

                            if (this.kerdl == true) {
                                image(this.p_kerd, this.x[i], this.y[i], this.m1[i], this.m2[i]);
                            } else {
                                image(this.p_kerds, this.x[i], this.y[i], this.m1[i], this.m2[i]);
                            }

                        } else {
                            image(this.p_kerdu, this.x[i], this.y[i], this.m1[i], this.m2[i]);
                        }
                    }

                    if (i >= 1050 && i <= 1081) {
                        if (this.szt[i] == false) {
                            image(this.p_t, this.x[i], this.y[i], this.m1[i], this.m2[i]);
                        } else {



                        }

                    }

                }
            }
        }

        if (this.anim[1] == true) {
            this.t[1] += 0.2;

            this.nxe_1[1] += this.sebesseg_v2;
            this.nxe_1[2] += this.sebesseg_v2;
            this.nxe_1[3] += this.sebesseg_v2;
            this.nxe_1[4] += this.sebesseg_v2;

            this.nx_1[1] = this.nxe_1[1] + 60 * this.t[1] * cos(260);
            this.ny_1[1] = this.nye_1[1] + 60 * this.t[1] * sin(260) + 9.81 / 2 * sq(this.t[1]);
            this.nx_1[2] = this.nxe_1[2] + 60 * this.t[1] * cos(280);
            this.ny_1[2] = this.nye_1[2] + 60 * this.t[1] * sin(280) + 9.81 / 2 * sq(this.t[1]);
            this.nx_1[3] = this.nxe_1[3] + 50 * this.t[1] * cos(260);
            this.ny_1[3] = this.nye_1[3] + 50 * this.t[1] * sin(260) + 9.81 / 2 * sq(this.t[1]);
            this.nx_1[4] = this.nxe_1[4] + 50 * this.t[1] * cos(280);
            this.ny_1[4] = this.nye_1[4] + 50 * this.t[1] * sin(280) + 9.81 / 2 * sq(this.t[1]);



            image(this.ptt, this.nx_1[1], this.ny_1[1], 22, 22);
            image(this.ptt, this.nx_1[2], this.ny_1[2], 22, 22);
            image(this.ptt, this.nx_1[3], this.ny_1[3], 22, 22);
            image(this.ptt, this.nx_1[4], this.ny_1[4], 22, 22);
            if (this.ny_1[1] > height + 50) {
                this.anim[1] = false;
                this.t[1] = 0;
                this.nei[1] = -1;
            }
        }

        if (this.anim[2] == true) {
            this.t[2] += 0.2;

            this.nxe_2[1] += this.sebesseg_v2;
            this.nxe_2[2] += this.sebesseg_v2;
            this.nxe_2[3] += this.sebesseg_v2;
            this.nxe_2[4] += this.sebesseg_v2;

            this.nx_2[1] = this.nxe_2[1] + 60 * this.t[2] * cos(260);
            this.ny_2[1] = this.nye_2[1] + 60 * this.t[2] * sin(260) + 9.81 / 2 * sq(this.t[2]);
            this.nx_2[2] = this.nxe_2[2] + 60 * this.t[2] * cos(280);
            this.ny_2[2] = this.nye_2[2] + 60 * this.t[2] * sin(280) + 9.81 / 2 * sq(this.t[2]);
            this.nx_2[3] = this.nxe_2[3] + 50 * this.t[2] * cos(260);
            this.ny_2[3] = this.nye_2[3] + 50 * this.t[2] * sin(260) + 9.81 / 2 * sq(this.t[2]);
            this.nx_2[4] = this.nxe_2[4] + 50 * this.t[2] * cos(280);
            this.ny_2[4] = this.nye_2[4] + 50 * this.t[2] * sin(280) + 9.81 / 2 * sq(this.t[2]);
            image(this.ptt, this.nx_2[1], this.ny_2[1], 22, 22);
            image(this.ptt, this.nx_2[2], this.ny_2[2], 22, 22);
            image(this.ptt, this.nx_2[3], this.ny_2[3], 22, 22);
            image(this.ptt, this.nx_2[4], this.ny_2[4], 22, 22);
            if (this.ny_2[1] > height + 50) {
                this.anim[2] = false;
                this.t[2] = 0;
                this.nei[2] = -1;
            }
        }

        if (this.anim[3] == true) {
            this.t[3] += 0.2;

            this.nxe_3[1] += this.sebesseg_v2;
            this.nxe_3[2] += this.sebesseg_v2;
            this.nxe_3[3] += this.sebesseg_v2;
            this.nxe_3[4] += this.sebesseg_v2;

            this.nx_3[1] = this.nxe_3[1] + 60 * this.t[3] * cos(260);
            this.ny_3[1] = this.nye_3[1] + 60 * this.t[3] * sin(260) + 9.81 / 2 * sq(this.t[3]);
            this.nx_3[2] = this.nxe_3[2] + 60 * this.t[3] * cos(280);
            this.ny_3[2] = this.nye_3[2] + 60 * this.t[3] * sin(280) + 9.81 / 2 * sq(this.t[3]);
            this.nx_3[3] = this.nxe_3[3] + 50 * this.t[3] * cos(260);
            this.ny_3[3] = this.nye_3[3] + 50 * this.t[3] * sin(260) + 9.81 / 2 * sq(this.t[3]);
            this.nx_3[4] = this.nxe_3[4] + 50 * this.t[3] * cos(280);
            this.ny_3[4] = this.nye_3[4] + 50 * this.t[3] * sin(280) + 9.81 / 2 * sq(this.t[3]);
            image(this.ptt, this.nx_3[1], this.ny_3[1], 22, 22);
            image(this.ptt, this.nx_3[2], this.ny_3[2], 22, 22);
            image(this.ptt, this.nx_3[3], this.ny_3[3], 22, 22);
            image(this.ptt, this.nx_3[4], this.ny_3[4], 22, 22);
            if (this.ny_3[1] > height + 50) {
                this.anim[3] = false;
                this.t[3] = 0;
                this.nei[3] = -1;
            }
        }

        if (this.anim[4] == true) {
            this.t[4] += 0.2;

            this.nxe_4[1] += this.sebesseg_v2;
            this.nxe_4[2] += this.sebesseg_v2;
            this.nxe_4[3] += this.sebesseg_v2;
            this.nxe_4[4] += this.sebesseg_v2;

            this.nx_4[1] = this.nxe_4[1] + 60 * this.t[4] * cos(260);
            this.ny_4[1] = this.nye_4[1] + 60 * this.t[4] * sin(260) + 9.81 / 2 * sq(this.t[4]);
            this.nx_4[2] = this.nxe_4[2] + 60 * this.t[4] * cos(280);
            this.ny_4[2] = this.nye_4[2] + 60 * this.t[4] * sin(280) + 9.81 / 2 * sq(this.t[4]);
            this.nx_4[3] = this.nxe_4[3] + 50 * this.t[4] * cos(260);
            this.ny_4[3] = this.nye_4[3] + 50 * this.t[4] * sin(260) + 9.81 / 2 * sq(this.t[4]);
            this.nx_4[4] = this.nxe_4[4] + 50 * this.t[4] * cos(280);
            this.ny_4[4] = this.nye_4[4] + 50 * this.t[4] * sin(280) + 9.81 / 2 * sq(this.t[4]);
            image(this.ptt, this.nx_4[1], this.ny_4[1], 22, 22);
            image(this.ptt, this.nx_4[2], this.ny_4[2], 22, 22);
            image(this.ptt, this.nx_4[3], this.ny_4[3], 22, 22);
            image(this.ptt, this.nx_4[4], this.ny_4[4], 22, 22);
            if (this.ny_4[1] > height + 50) {
                this.anim[4] = false;
                this.t[4] = 0;
                this.nei[4] = -1;
            }
        }

    }
}

function Virag() {

    this.x = 3495;
    this.y = 360;
    this.m1 = 39;
    this.m2 = 40;

    this.kep = [];

    this.kep[1] = loadImage("libmario/images/virag_1.png");
    this.kep[2] = loadImage("libmario/images/virag_2.png");
    this.kep[3] = loadImage("libmario/images/virag_3.png");
    this.kep[0] = this.kep[1];
    this.millis_ = 0;
    this.i = 0;

    this.gba = -1;
    this.felvett_virag = false;
    this.bx = 0;
    this.by = 0;

    this.sebesseg_v2 = 0;

    this.megjelenites = function () {

        if (this.gba != talaj_fal.kerd && talaj_fal.kerd != 0 && (talaj_fal.kerd == 1003 || talaj_fal.kerd == 1006 || talaj_fal.kerd == 1008)) {
            this.gba = talaj_fal.kerd;
            this.tiltasb = false;
            this.tiltasj = false;
            this.lathato = false;
            this.animation = false;

        }

        if (this.millis_ <= millis()) {
            this.millis_ = millis() + 20;

            switch (this.i) {
                case 0:
                    this.kep[0] = this.kep[1];
                    this.i = 1;
                    break;
                case 1:
                    this.kep[0] = this.kep[2];
                    this.i = 2;
                    break;
                case 2:
                    this.kep[0] = this.kep[3];
                    this.i = 0;
                    break;
            }
        }

        if (talaj_fal.kerd == 1003 || talaj_fal.kerd == 1006 || talaj_fal.kerd == 1008) {
            if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
                if (this.animation == false) {
                    this.animation = true
                    this.x = talaj_fal.x[talaj_fal.kerd];
                    this.y = talaj_fal.y[talaj_fal.kerd] - 15;
                }
            }
        }

        if (this.animation == true) {
            this.x -= this.sebesseg_v2;
            image(this.kep[0], this.x, this.y, this.m1, this.m2);

            if (this.y >= talaj_fal.y[talaj_fal.kerd] - talaj_fal.m2[talaj_fal.kerd] * 0.94) {
                this.y--;
            } else {
                this.animation = false;
                talaj_fal.kerd = 0;
                this.lathato = true;
            }
        }

        if (abs(this.x - jatekos.x) < 30 && abs(this.y - jatekos.y) < 40 && this.lathato == true) {
            this.lathato = false;
            this.felvett_virag = true;
            pont_animacio.ai++;
            pont_animacio.x[pont_animacio.ai] = this.x;
            pont_animacio.y[pont_animacio.ai] = this.y;
            pont_animacio.ye[pont_animacio.ai] = this.y;
            pont_animacio.e[pont_animacio.ai] = 1000;
            pont_animacio.l[pont_animacio.ai] = true;
            grafika.pont += pont_animacio.e[pont_animacio.ai];

        }

        if (this.lathato == true) {
            this.x -= this.sebesseg_v2;
            image(this.kep[0], this.x, this.y, this.m1, this.m2);
        }

    }
}