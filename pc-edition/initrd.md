# Initrd Usage

1. Add or edit files under `assets/initrd/` (e.g. `hello.txt`).
2. `make run` (build step packs them into `build/assets/initrd.img`).
3. In shell: `ls /rom` or `cat /rom/hello.txt`.

Archive format is standard cpio "newc"; paths with or without `./` are accepted.
