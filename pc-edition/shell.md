# Shell Reference

| Command        | Description |
|----------------|-------------|
| help           | List builtins |
| ls [p]         | List directory (mount dirs + FS entries) |
| cat f          | Dump file (<=4 KiB shown) |
| stat p         | Show type & size |
| cd [d]         | Change tracked working directory |
| clear          | Clear framebuffer |
| mem stats      | Show heap + physical page stats |
| mem alloc n [a]| Allocate n bytes (optional alignment a) |
| mem free ptr   | Free block at ptr (hex or 0x...) |
