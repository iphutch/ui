var Prism = require("prismjs");
(function(Prism) {
  var insideString = {
    variable: [
      // Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: true
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // Command Substitution
      {
        pattern: /\$\([^)]+\)|`[^`]+`/,
        greedy: true,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      /\$(?:[\w#?*!@]+|\{[^}]+\})/i
    ]
  };

  Prism.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\])#.*/,
      lookbehind: true
    },
    string: [
      //Support for Here-Documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      },
      {
        pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
        greedy: true,
        inside: insideString
      }
    ],
    variable: insideString.variable,
    // Originally based on http://ss64.com/bash/
    function: {
      pattern: /(^|[\s;|&])(?:7z|7za|7zr|ab|ack|adb|ag|airpaste|alias|ansible-galaxy|ansible-playbook|ansible|apg|apm|apropos|ar|aria2c|arp|assimp|astyle|at|atom|atq|atrm|autoflake|autojump|autossh|avrdude|awk|aws s3|axel|babel|badblocks|base32|base64|basename|bash|bashmarks|batch|bc|beanstalkd|bedtools|bg|blender|bmaptool|boot|borg|bosh|bower|box|browser-sync|bundle|c99|cabal|calibre-server|calibredb|cargo|case|cat|cd|chgrp|chmod|chown|chsh|cksum|clang|cloc|cmake|cmark|cmp|code|column|comm|composer|conda|consul-kv|consul|convert|convmv|cordova|couchdb|cowsay|cp|cpio|cppcheck|cppclean|crontab|csslint|csvclean|csvcut|csvformat|csvgrep|csvlook|csvpy|csvsort|csvstat|curl|cut|dc|deluser|dep|detox|df|dhcpwn|diff|diffstat|dig|dirs|docker-compose|docker|dokku|dot|dotnet|doxygen|drush|duplicity|ebook-convert|echo|ed|electrum|elinks|emacs|emacsclient|ember|enca|env|eslint|espeak|exa|exiftool|fastboot|fd|fdupes|ffmpeg|ffprobe|fg|find|fish|flac|flex|fly|fold|for|forever|fortune|fping|fswatch|fswebcam|ftp|fuck|fzf|gplusplus|gatsby|gcc|gdb|gem|geth|ghc|gifsicle|gist|git add|git bisect|git blame|git branch|git checkout|git cherry-pick|git clean|git clone|git commit|git config|git diff|git fetch|git gc|git-imerge|git init|git log|git merge|git mv|git pull|git push|git rebase|git reflog|git remote|git reset|git rm|git shortlog|git show|git sizer|git stash|git status|git submodule|git svn|git tag|git worktree|git|gitk|gitsome|glances|gnuplot|go|gofmt|gource|gpg|gradle|grep|groff|grunt|gtop|gulp|gunzip|gzip|handbrakecli|hangups|haxelib|help2man|heroku|hg add|hg branch|hg clone|hg commit|hg init|hg log|hg pull|hg push|hg remove|hg serve|hg update|hg|history|hn|host|htpasswd|http|hub|hugo|iconv|id|id3tag|if|ifconfig|ignite|imapsync|import|in2csv|inkscape|install|ionice|ioping|ipcs|iperf|iperf3|ipfs|irssi|jar|java|javac|jekyll|jhat|jmap|jobs|jpegoptim|jps|jq|jrnl|json5|jstack|julia|jupyter|kak|keepass2|keybase|kill|killall|kubectl|laravel|last|latexmk|leave|lebab|lein|less|lex|license|live-server|ln|locust|logstash|lp|lpass|lpstat|ls|lsof|lua|lumen|lwp-request|lz4|mailx|make|man|mc|mdp|mediainfo|meshlabserver|meteor|micro|mitmdump|mitmproxy|mix|mkdir|mkfifo|mktemp|mmv|mocha|mogrify|mongo|mongod|mongodump|mongorestore|montage|more|moro|mosh|most|mount|mp4box|mpc|mr|msbuild|msmtp|mtr|mutt|mv|mvn|mysql|mysqldump|nano|nasm|nc|ncmpcpp|nginx|ngrep|nice|nikto|nix-collect-garbage|nix-env|nmap|node|nohup|npm-check|npm|npx|nrm|nslookup|nvm|od|odps auth|odps func|odps inst|odps resource|odps table|odps tunnel|odps|omf|openssl|optipng|p5|paci|pandoc|parallel|pass|passwd|paste|patch|pdfjoin|pdflatex|pdfposter|pdftk|pdftotext|pdfunite|peerflix|perl|pgrep|pg_ctl|pg_dump|pg_restore|phive|php|phpcs|phpize|phploc|phpstan|phpunit|pigz|ping|ping6|pip|pipenv|pkill|play|pm2|pngcrush|postcss|printf|prosodyctl|protoc|ps|psql|pssh|pup|pv|pwd|pycodestyle|pyenv|pygmentize|python|q|qemu-img|qemu|qpdf|quota|r|rabin2|rails|rainbowstream|rbash|read|readlink|redis-cli|redshift|rename|renice|repren|restic|rev|ripgrep|rm|rmdir|roll|route|rsync|rtv|ruby|rustc|rustup|rvm|s|sails|salt-key|salt-run|salt|samtools|sass|scala|scp|scrapy|screen|screenfetch|sed|sendmail|seq|serverless|sftp|sh|shopt|shred|singularity|skicka|sl|slackcat|sleep|smartctl|socat|sort|sox|spatial|speedtest-cli|spike|split|sqlite3|sqsc|srm|ssh-copy-id|ssh-keygen|ssh|sshfs|sshpass|st-flash|st-info|st-util|stack|standard|stow|strings|su|subliminal|sudo|sum|supervisorctl|supervisord|surge|svgo|svn|swagger-codegen|swift|sync|tabula|tac|tail|tar|task|tcpdump|tee|telnet|tesseract|test|time|timew|tldr|tldrl|tmux|touch|tpp|tput|tr|traceroute|traefik|trans|transcode|trash-cli|tty|ufraw-batch|umount|unar|uniq|unrar|unzip|uptime|upx|vagrant|valgrind|vault|view|vim|vimdiff|vimtutor|virtualenv|visudo|vue-cli|w|w3m|wait|watch|wc|webpack|wget|where|which|while|who|whoami|wordgrinder|wuzz|xargs|xcv|xmllint|xxd|xz|x_x|yarn|yes|yesod|youtube-dl|z|zbarimg|zcat|zdb|zfs|zip|zless|zpool|zsh|adduser|alpine|apache2ctl|apk|apt-cache|apt-get|apt-key|apt|aptitude|archey|arp-scan|authconfig|beep|bmon|brew|bzip2|cal|calc|certbot|chage|chattr|chroot|clear|cmus|compgen|compose|cpufreq-aperf|cpufreq-info|cpufreq-set|cpuid|cryptsetup|dash|datamash|date|dbus-daemon|dd|dmesg|dmidecode|dnf|dpkg-query|dpkg|du|ebuild|edit|edquota|emerge|envsubst|equery|eval|expand|export|expr|eyeD3|f5fpc|fallocate|fatlabel|fc-list|fc-match|fc-pattern|fdisk|feh|figlet|file|findmnt|firewall-cmd|foreman|free|fsck|fuser|genkernel|getent|getfacl|groupadd|groupdel|groupmod|halt|hardinfo|head|hexdump|hostname|hostnamectl|htop|http-prompt|httpie|hwclock|i7z|ifdown|ifup|imgp|inxi|iostat|ip|iptables|isoinfo|journalctl|kexec|lastlog|ldconfig|ldd|light|lldb|locate|logger|logwatch|losetup|lsattr|lsblk|lsb_release|lscpu|lshw|lsmod|lspci|lsscsi|ltrace|lvcreate|lxc|md5sum|mdadm|microcom|mke2fs|mkfs.cramfs|mkfs.exfat|mkfs.fat|mkfs.minix|mkfs.ntfs|mkfs.vfat|mkisofs|mkswap|modinfo|mpstat|mycli|n|ncat|nethogs|netstat|nft|nl|nm|nmcli|nmon|nmtui|notify-send|ntfsfix|objdump|opkg|pacaur|pacman|pasuspender|pdfgrep|perf|phar|pkgadd|pkginfo|pkgmk|pkgrm|playerctl|popd|ports|print|prt-get|pstree|pulseaudio|pushd|pvcreate|pwgen|qsub|quotacheck|rdesktop|reboot|repquota|rofi|rpm|rspamc|rtcwake|rtorrent|run-mailcap|runit|runsv|runsvchdir|runsvdir|sar|see|sensible-browser|service|setfacl|sha1sum|sha224sum|sha256sum|sha384sum|sha512sum|shasum|shuf|shutdown|smbclient|snap|ss|ssh-add|sshuttle|stat|strace|sv|swapoff|swapon|sysctl|systemctl|systemd-analyze|tcpflow|terminator|timedatectl|timeout|tomb|top|trap|tree|trizen|ufw|ulimit|umask|uname|unexpand|units|update-alternatives|update-rc.d|useradd|userdel|usermod|vgcreate|viewnior|vncserver|wall|whatis|whereis|wodim|wpa_cli|write|x11vnc|xclip|xdotool|xeyes|xinput|xman|xrandr|xsel|xsetwacom|yank|yaourt|yum|zenity|zramctl|zypper|airport|apachectl|brew cask|brew mas|caffeinate|carthage|codesign|defaults|diskutil|ditto|drutil|imgcat|launchctl|look|md5|mdfind|networksetup|open|opensnoop|osascript|pbcopy|pbpaste|pmset|pod|port|qlmanage|rubocop|say|scutil|sips|softwareupdate|sw_vers|systemsetup|system_profiler|wacaw|xattr|xcodebuild|xctool|xed|xsltproc)(?=$|[\s;|&])/,
      lookbehind: true
    },
    keyword: {
      pattern: /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
      lookbehind: true
    },
    boolean: {
      pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,
      lookbehind: true
    },
    placeholder: {
      pattern: /(^\{\{[\w]+\}\})/,
      lookbehind: true
    },
    operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
    punctuation: /\$?\(\(?|\)\)?|\.\.|[[\];]/
  };

  var inside = insideString.variable[1].inside;
  inside.string = Prism.languages.bash.string;
  inside["function"] = Prism.languages.bash["function"];
  inside.keyword = Prism.languages.bash.keyword;
  inside.boolean = Prism.languages.bash.boolean;
  inside.operator = Prism.languages.bash.operator;
  inside.placeholder = Prism.languages.bash.placeholder;
  inside.punctuation = Prism.languages.bash.punctuation;

  Prism.languages.shell = Prism.languages.bash;
})(Prism);
