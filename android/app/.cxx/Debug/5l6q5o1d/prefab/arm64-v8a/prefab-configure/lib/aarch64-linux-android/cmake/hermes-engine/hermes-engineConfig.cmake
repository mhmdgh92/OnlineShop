if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/mhmdgh/.gradle/caches/transforms-3/83410ad02871806295b50f2b23d7d519/transformed/jetified-hermes-android-0.71.10-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/mhmdgh/.gradle/caches/transforms-3/83410ad02871806295b50f2b23d7d519/transformed/jetified-hermes-android-0.71.10-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

