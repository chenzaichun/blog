#!/bin/sh

function replace() {
    sed -i '' -e '/#+begin_html/d' $1
    sed -i '' -e '/#+end_html/d' $1
    sed -i '' 's/#+begin_src\ /\`\`\`/g' $1
    sed -i '' 's/#+end_src/\`\`\`/g' $1
    sed -i '' 's/#+begin_example/\`\`\`/g' $1
    sed -i '' 's/#+end_example/\`\`\`/g' $1
    awk '{if (NR==1 && NF==0) next};1' $1 > $1.bak
    mv $1.bak $1
}

for f in `ls *.md`
do
    replace $f
done



