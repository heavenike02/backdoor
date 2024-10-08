CREATE TYPE "public"."pricing_plan_interval" AS ENUM ('day', 'week', 'month', 'year');
ALTER TYPE "public"."pricing_plan_interval" OWNER TO "postgres";
--
-- Name: pricing_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE "public"."pricing_type" AS ENUM ('one_time', 'recurring');
ALTER TYPE "public"."pricing_type" OWNER TO "postgres";
--
-- Name: subscription_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE "public"."subscription_status" AS ENUM (
  'trialing',
  'active',
  'canceled',
  'incomplete',
  'incomplete_expired',
  'past_due',
  'unpaid',
  'paused'
);
ALTER TYPE "public"."subscription_status" OWNER TO "postgres";
--
-- Name: organization_join_invitation_link_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE "public"."organization_join_invitation_link_status" AS ENUM (
  'active',
  'finished_accepted',
  'finished_declined',
  'inactive'
);
ALTER TYPE "public"."organization_join_invitation_link_status" OWNER TO "postgres";
--
-- Name: organization_joining_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE "public"."organization_joining_status" AS ENUM (
  'invited',
  'joinied',
  'declined_invitation',
  'joined'
);
ALTER TYPE "public"."organization_joining_status" OWNER TO "postgres";
--
-- Name: organization_member_role; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE "public"."user_types" AS ENUM (
  'landlord',
  'tenant'
);
ALTER TYPE "public"."user_types" OWNER TO "postgres";

CREATE TYPE "public"."organization_member_role" AS ENUM ('owner', 'admin', 'member', 'readonly');
ALTER TYPE "public"."organization_member_role" OWNER TO "postgres";
