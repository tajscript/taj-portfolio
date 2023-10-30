// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FreelanceDocumentDataSlicesSlice =
  | FreelanceContactSlice
  | FreelanceWorkSlice
  | SkillsSlice
  | ProjectsSlice
  | FreelanceServicesSlice
  | FreelanceHelpSlice
  | FreelanceAboutSlice
  | FreelanceHeroSlice;

/**
 * Content for Freelance documents
 */
interface FreelanceDocumentData {
  /**
   * Slice Zone field in *Freelance*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FreelanceDocumentDataSlicesSlice> /**
   * Meta Description field in *Freelance*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: freelance.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Freelance*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Freelance*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: freelance.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Freelance document from Prismic
 *
 * - **API ID**: `freelance`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FreelanceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FreelanceDocumentData>,
    "freelance",
    Lang
  >;

/**
 * Content for Freelance_Nav documents
 */
interface FreelanceNavDocumentData {
  /**
   * Text field in *Freelance_Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_nav.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Email_Link field in *Freelance_Nav*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_nav.email_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  email_link: prismic.LinkField;

  /**
   * Email_Text field in *Freelance_Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_nav.email_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_text: prismic.KeyTextField;

  /**
   * Label field in *Freelance_Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_nav.label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Freelance_Nav document from Prismic
 *
 * - **API ID**: `freelance_nav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FreelanceNavDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FreelanceNavDocumentData>,
    "freelance_nav",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | ContactSlice
  | SkillsSlice
  | ProjectsSlice
  | AboutSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for Home_Nav documents
 */
interface NavDocumentData {
  /**
   * About field in *Home_Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav.about
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about: prismic.KeyTextField;

  /**
   * Projects field in *Home_Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav.projects
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  projects: prismic.KeyTextField;

  /**
   * Contact field in *Home_Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav.contact
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact: prismic.KeyTextField;

  /**
   * Freelance field in *Home_Nav*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav.freelance
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  freelance: prismic.RichTextField;
}

/**
 * Home_Nav document from Prismic
 *
 * - **API ID**: `nav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<NavDocumentData>, "nav", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | FreelanceDocument
  | FreelanceNavDocument
  | HomepageDocument
  | NavDocument
  | SettingsDocument;

/**
 * Primary content in *About → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Number field in *About → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField;

  /**
   * Title field in *About → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Image field in *About → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Description field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *About → Items*
 */
export interface AboutSliceDefaultItem {
  /**
   * Link field in *About → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *About → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  Simplify<AboutSliceDefaultItem>
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *Contact → Primary*
 */
export interface ContactSliceDefaultPrimary {
  /**
   * Number field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField;

  /**
   * Title field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Heading field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Link field in *Contact → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Connect field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.connect
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  connect: prismic.KeyTextField;

  /**
   * Email_Link field in *Contact → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.email_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  email_link: prismic.LinkField;

  /**
   * Email_Text field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.email_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_text: prismic.KeyTextField;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Primary content in *FreelanceAbout → Primary*
 */
export interface FreelanceAboutSliceDefaultPrimary {
  /**
   * Title field in *FreelanceAbout → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_about.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *FreelanceAbout → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_about.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *FreelanceAbout → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_about.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *FreelanceAbout → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_about.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *FreelanceAbout → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_about.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for FreelanceAbout Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceAboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FreelanceAboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FreelanceAbout*
 */
type FreelanceAboutSliceVariation = FreelanceAboutSliceDefault;

/**
 * FreelanceAbout Shared Slice
 *
 * - **API ID**: `freelance_about`
 * - **Description**: FreelanceAbout
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceAboutSlice = prismic.SharedSlice<
  "freelance_about",
  FreelanceAboutSliceVariation
>;

/**
 * Primary content in *FreelanceContact → Primary*
 */
export interface FreelanceContactSliceDefaultPrimary {
  /**
   * Title field in *FreelanceContact → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_contact.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Email field in *FreelanceContact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_contact.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Email_Link field in *FreelanceContact → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_contact.primary.email_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  email_link: prismic.LinkField;

  /**
   * Consultation field in *FreelanceContact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_contact.primary.consultation
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  consultation: prismic.KeyTextField;

  /**
   * Consultation_Link field in *FreelanceContact → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_contact.primary.consultation_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  consultation_link: prismic.LinkField;
}

/**
 * Primary content in *FreelanceContact → Items*
 */
export interface FreelanceContactSliceDefaultItem {
  /**
   * Link field in *FreelanceContact → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_contact.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *FreelanceContact → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_contact.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for FreelanceContact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FreelanceContactSliceDefaultPrimary>,
  Simplify<FreelanceContactSliceDefaultItem>
>;

/**
 * Slice variation for *FreelanceContact*
 */
type FreelanceContactSliceVariation = FreelanceContactSliceDefault;

/**
 * FreelanceContact Shared Slice
 *
 * - **API ID**: `freelance_contact`
 * - **Description**: FreelanceContact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceContactSlice = prismic.SharedSlice<
  "freelance_contact",
  FreelanceContactSliceVariation
>;

/**
 * Primary content in *FreelanceHelp → Primary*
 */
export interface FreelanceHelpSliceDefaultPrimary {
  /**
   * Heading field in *FreelanceHelp → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_help.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Note field in *FreelanceHelp → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_help.primary.note
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  note: prismic.RichTextField;
}

/**
 * Primary content in *FreelanceHelp → Items*
 */
export interface FreelanceHelpSliceDefaultItem {
  /**
   * Title field in *FreelanceHelp → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_help.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *FreelanceHelp → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_help.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Duration field in *FreelanceHelp → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_help.items[].duration
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  duration: prismic.KeyTextField;
}

/**
 * Default variation for FreelanceHelp Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceHelpSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FreelanceHelpSliceDefaultPrimary>,
  Simplify<FreelanceHelpSliceDefaultItem>
>;

/**
 * Slice variation for *FreelanceHelp*
 */
type FreelanceHelpSliceVariation = FreelanceHelpSliceDefault;

/**
 * FreelanceHelp Shared Slice
 *
 * - **API ID**: `freelance_help`
 * - **Description**: FreelanceHelp
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceHelpSlice = prismic.SharedSlice<
  "freelance_help",
  FreelanceHelpSliceVariation
>;

/**
 * Primary content in *FreelanceHero → Primary*
 */
export interface FreelanceHeroSliceDefaultPrimary {
  /**
   * Description field in *FreelanceHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Label field in *FreelanceHero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_hero.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Heading field in *FreelanceHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Scroll field in *FreelanceHero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_hero.primary.scroll
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  scroll: prismic.KeyTextField;
}

/**
 * Default variation for FreelanceHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FreelanceHeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FreelanceHero*
 */
type FreelanceHeroSliceVariation = FreelanceHeroSliceDefault;

/**
 * FreelanceHero Shared Slice
 *
 * - **API ID**: `freelance_hero`
 * - **Description**: FreelanceHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceHeroSlice = prismic.SharedSlice<
  "freelance_hero",
  FreelanceHeroSliceVariation
>;

/**
 * Primary content in *FreelanceServices → Primary*
 */
export interface FreelanceServicesSliceDefaultPrimary {
  /**
   * Heading field in *FreelanceServices → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_services.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Primary content in *FreelanceServices → Items*
 */
export interface FreelanceServicesSliceDefaultItem {
  /**
   * Title field in *FreelanceServices → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_services.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *FreelanceServices → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_services.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for FreelanceServices Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FreelanceServicesSliceDefaultPrimary>,
  Simplify<FreelanceServicesSliceDefaultItem>
>;

/**
 * Slice variation for *FreelanceServices*
 */
type FreelanceServicesSliceVariation = FreelanceServicesSliceDefault;

/**
 * FreelanceServices Shared Slice
 *
 * - **API ID**: `freelance_services`
 * - **Description**: FreelanceServices
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceServicesSlice = prismic.SharedSlice<
  "freelance_services",
  FreelanceServicesSliceVariation
>;

/**
 * Primary content in *FreelanceWork → Primary*
 */
export interface FreelanceWorkSliceDefaultPrimary {
  /**
   * Heading field in *FreelanceWork → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_work.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Description field in *FreelanceWork → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_work.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *FreelanceWork → Items*
 */
export interface FreelanceWorkSliceDefaultItem {
  /**
   * Number field in *FreelanceWork → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_work.items[].number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField;

  /**
   * Title field in *FreelanceWork → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_work.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *FreelanceWork → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: freelance_work.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for FreelanceWork Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceWorkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FreelanceWorkSliceDefaultPrimary>,
  Simplify<FreelanceWorkSliceDefaultItem>
>;

/**
 * Slice variation for *FreelanceWork*
 */
type FreelanceWorkSliceVariation = FreelanceWorkSliceDefault;

/**
 * FreelanceWork Shared Slice
 *
 * - **API ID**: `freelance_work`
 * - **Description**: FreelanceWork
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreelanceWorkSlice = prismic.SharedSlice<
  "freelance_work",
  FreelanceWorkSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Number field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField;

  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Heading0 field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading0
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading0: prismic.RichTextField;

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Projects → Primary*
 */
export interface ProjectsSliceDefaultPrimary {
  /**
   * Number field in *Projects → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.primary.number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField;

  /**
   * Title field in *Projects → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Projects → Items*
 */
export interface ProjectsSliceDefaultItem {
  /**
   * Heading field in *Projects → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Year field in *Projects → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].year
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;

  /**
   * Link field in *Projects → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Projects → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Description field in *Projects → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Skills field in *Projects → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].skills
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  skills: prismic.RichTextField;

  /**
   * GitLink field in *Projects → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].gitlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  gitlink: prismic.LinkField;

  /**
   * GitText field in *Projects → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].gittext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  gittext: prismic.KeyTextField;

  /**
   * Image field in *Projects → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Projects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectsSliceDefaultPrimary>,
  Simplify<ProjectsSliceDefaultItem>
>;

/**
 * Slice variation for *Projects*
 */
type ProjectsSliceVariation = ProjectsSliceDefault;

/**
 * Projects Shared Slice
 *
 * - **API ID**: `projects`
 * - **Description**: Projects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSlice = prismic.SharedSlice<
  "projects",
  ProjectsSliceVariation
>;

/**
 * Primary content in *Skills → Primary*
 */
export interface SkillsSliceDefaultPrimary {
  /**
   * Heading field in *Skills → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Primary content in *Skills → Items*
 */
export interface SkillsSliceDefaultItem {
  /**
   * Label field in *Skills → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for Skills Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SkillsSliceDefaultPrimary>,
  Simplify<SkillsSliceDefaultItem>
>;

/**
 * Slice variation for *Skills*
 */
type SkillsSliceVariation = SkillsSliceDefault;

/**
 * Skills Shared Slice
 *
 * - **API ID**: `skills`
 * - **Description**: Skills
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsSlice = prismic.SharedSlice<"skills", SkillsSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FreelanceDocument,
      FreelanceDocumentData,
      FreelanceDocumentDataSlicesSlice,
      FreelanceNavDocument,
      FreelanceNavDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      NavDocument,
      NavDocumentData,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceDefaultItem,
      AboutSliceVariation,
      AboutSliceDefault,
      ContactSlice,
      ContactSliceDefaultPrimary,
      ContactSliceVariation,
      ContactSliceDefault,
      FreelanceAboutSlice,
      FreelanceAboutSliceDefaultPrimary,
      FreelanceAboutSliceVariation,
      FreelanceAboutSliceDefault,
      FreelanceContactSlice,
      FreelanceContactSliceDefaultPrimary,
      FreelanceContactSliceDefaultItem,
      FreelanceContactSliceVariation,
      FreelanceContactSliceDefault,
      FreelanceHelpSlice,
      FreelanceHelpSliceDefaultPrimary,
      FreelanceHelpSliceDefaultItem,
      FreelanceHelpSliceVariation,
      FreelanceHelpSliceDefault,
      FreelanceHeroSlice,
      FreelanceHeroSliceDefaultPrimary,
      FreelanceHeroSliceVariation,
      FreelanceHeroSliceDefault,
      FreelanceServicesSlice,
      FreelanceServicesSliceDefaultPrimary,
      FreelanceServicesSliceDefaultItem,
      FreelanceServicesSliceVariation,
      FreelanceServicesSliceDefault,
      FreelanceWorkSlice,
      FreelanceWorkSliceDefaultPrimary,
      FreelanceWorkSliceDefaultItem,
      FreelanceWorkSliceVariation,
      FreelanceWorkSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProjectsSlice,
      ProjectsSliceDefaultPrimary,
      ProjectsSliceDefaultItem,
      ProjectsSliceVariation,
      ProjectsSliceDefault,
      SkillsSlice,
      SkillsSliceDefaultPrimary,
      SkillsSliceDefaultItem,
      SkillsSliceVariation,
      SkillsSliceDefault,
    };
  }
}
