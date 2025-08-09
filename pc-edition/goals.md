# Goals

- UEFI-only boot path (no multiboot / GRUB boilerplate)
- Keep the kernel as small as possible while still "real" (interrupts, drivers, filesystem abstraction)
- Introduce dynamic allocation gradually (boot bump -> physical page bitmap -> guarded heap) with clarity
- Maintain a clean, maintainable core for future feature growth (clarity over premature micro-optimizations)
