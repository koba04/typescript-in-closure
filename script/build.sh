#!/bin/sh
./node_modules/google-closure-library/closure/bin/build/closurebuilder.py \
--namespace=app \
--root=. \
--output_file=bundle.js \
--output_mode=compiled \
--compiler_jar=node_modules/google-closure-compiler/compiler.jar \
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS"