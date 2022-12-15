<template>
  <v-app>
    <navbar />
      <div id="spacer"></div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue";
export default {
  components: { navbar },
};
</script>

<style>
.v-main{
  height:auto
}
.v-application--wrap{
  background-color:rgb(211, 211, 211) !important;
  color: rgb(70, 70, 70) !important;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
#spacer {
  width: 100%;
  height: 110px;
}
ul li {
  list-style-type: none;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
