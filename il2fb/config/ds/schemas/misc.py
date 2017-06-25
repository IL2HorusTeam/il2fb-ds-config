# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType, IntType

from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini, field_to_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Miscellaneous(Model):
    difficulty = IntType(
        min_value=0,
        default=193791,
        required=True,
    )
    display_custom_skins = BooleanType(
        default=True,
        required=True,
    )
    allow_custom_sounds = BooleanType(
        default=True,
        required=True,
    )
    filter_user_names = BooleanType(
        default=False,
        required=True,
    )
    display_small_way_point_labels = BooleanType(
        default=True,
        required=True,
    )
    skip_paratrooper_views = BooleanType(
        default=False,
        required=True,
    )
    use_new_clouds_rendering = BooleanType(
        default=True,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'difficulty': field_from_ini(
                cls.difficulty, ini,
                'NET', 'difficulty',
            ),
            'display_custom_skins': field_from_ini(
                cls.display_custom_skins, ini,
                'NET', 'SkinDownload',
            ),
            'allow_custom_sounds': field_from_ini(
                cls.allow_custom_sounds, ini,
                'NET', 'allowCustomSounds',
            ),
            'filter_user_names': field_from_ini(
                cls.filter_user_names, ini,
                'NET', 'filterUserNames',
            ),
            'display_small_way_point_labels': field_from_ini(
                cls.display_small_way_point_labels, ini,
                'game', 'SmallMapWPLabels',
            ),
            'skip_paratrooper_views': field_from_ini(
                cls.skip_paratrooper_views, ini,
                'game', 'SkipParatrooperViews',
            ),
            'use_new_clouds_rendering': field_from_ini(
                cls.use_new_clouds_rendering, ini,
                'game', 'TypeClouds',
            ),
        })

    def to_ini(self, ini):
        field_to_ini(self.difficulty, ini, 'NET', 'difficulty')
        field_to_ini(self.display_custom_skins, ini, 'NET', 'SkinDownload')
        field_to_ini(self.allow_custom_sounds, ini, 'NET', 'allowCustomSounds')
        field_to_ini(self.filter_user_names, ini, 'NET', 'filterUserNames')
        field_to_ini(self.display_small_way_point_labels, ini, 'game', 'SmallMapWPLabels')
        field_to_ini(self.skip_paratrooper_views, ini, 'game', 'SkipParatrooperViews')
        field_to_ini(self.use_new_clouds_rendering, ini, 'game', 'TypeClouds')

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })
