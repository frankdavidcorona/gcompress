Project gcompress !!!
=

Description
-
This project consist in a Gulp task for compress JS files.

---
Pre requisites
-
Have installed and correctly configured:
 1. Linux :-)
 2. npm
 2. git
 2. nodejs
 2. gulp

---
Install
-

 1. Clone the repository with the comand:<br>
    <code>git clone https://codecomunidades.prod.uci.cu/corona/gcompress.git</code>
    
 2. Locate into the recent download folder:<br>
 <code>cd gulp-minify</code>
 
 3. Install dependencies:<br>
 <code>npm install</code>

---
Parameters
-
The task can accept two parameters called source and destino. The parameters must be passed with this format:
<pre>--source='/route/to/source'</pre>
<pre>--destino='/route/to/destino'</pre>

---
Usage example
-
<code>gulp gcompress --source='route/to/source' --destino='route/to/destino' </code><br>
The output create in the <b>destino</b> a new folder named <b>dist</b> that's contains the result of the task.

---
Documentation
-
By default the task will not obfuscate the code output, however this option can be changed by accessing the file:<br>
<pre>gulpfile.js</pre><br>
Find this option:<br>
<code>var options = {mangle: false};</code><br>
And change the <b>mangle</b> value to <b>true</b>.