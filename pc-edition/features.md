# Feature Snapshot

## Boot / Hand-off
- gnu-efi loader collects framebuffer (GOP), PSF1 font, optional initrd, memory map
- Exits boot services then jumps to kernel with `BootInfo`.

## Console & IO
- 32‑bpp framebuffer text console (PSF1 font, scroll, backspace)
- COM1 (115200) serial mirror for logging.

## Interrupts & Devices
- IDT with keyboard IRQ1 installed
- Legacy PIC remapped to 0x20–0x2F
- PS/2 keyboard driver (shift + common symbol mapping)

## Filesystem & Initrd
- cpio-newc initrd packed from `assets/initrd`
- Mounted at `/rom` through a minimal VFS (mount table + path dispatch)

## Shell
- Line editor + builtins: `help`, `ls`, `cat`, `stat`, `cd`, `clear`, `mem`

## Lib Support
- Minimal string/memory routines (`memcmp`, `strcmp`, etc.)
- Shared formatting / parsing helpers (decimal / hex emit, alignment, hex parse)

## Memory
- Bootstrap bump allocator (early init window after kernel end)
- Physical memory manager (bitmap over UEFI conventional memory)
- Guarded free-list heap (pre/post guard words, split/coalesce, stats via `mem`)
