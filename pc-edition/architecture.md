# Runtime Architecture

## Boot Flow
UEFI -> gnu-efi loader -> collect resources -> `ExitBootServices` -> jump to `kmain(BootInfo*)`.

## BootInfo Fields (see `include/bootinfo.hpp`)
- Framebuffer: base, size, geometry, pixel format
- Font: glyph pointer, count, width (8), height
- Memory map: raw snapshot (parsed for conventional memory pages during PMM init)
- Initrd: base + size of cpio-newc archive (optional)

## Subsystems
### Framebuffer Console
8xH glyph blitter; scrolls by row copy; fixed colors

### Serial
16550 init + write helpers (mirrors important messages)

### Interrupts
IDT install + PIC remap; `sti` after devices ready

### Keyboard
Set 1 scancode decode -> ASCII -> shell consumer callback

### Initrd Parser
Sequential scan; tolerant of leading `./`; exposes lookup + VFS ops

### VFS
Longest-prefix mount resolution; stat/read/readdir; synthesizes `.` `..` and mount points

### Memory
Bump -> bitmap PMM -> guarded heap (no expansion yet)

### Shell
Path normalization (., ..); 256‑byte input buffer; simple tokenizer; builtins
